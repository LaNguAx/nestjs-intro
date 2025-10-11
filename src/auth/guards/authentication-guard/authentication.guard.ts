import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { AccessTokenGuard } from '../access-token/access-token.guard';
import { AuthTypeEnum } from 'src/auth/enums/auth-type.enum';
import {
  AUTH_MODE_KEY,
  AUTH_TYPE_KEY,
} from 'src/auth/constants/auth.constants';
import { AuthModeEnum } from 'src/auth/enums/auth-mode.enum';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  private static readonly defaultAuthType = AuthTypeEnum.Bearer;

  private readonly authTypeGuardMap: Record<
    AuthTypeEnum,
    CanActivate | CanActivate[]
  >;

  constructor(
    private readonly reflector: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard,
  ) {
    this.authTypeGuardMap = {
      [AuthTypeEnum.Bearer]: this.accessTokenGuard,
      [AuthTypeEnum.None]: { canActivate: () => true },
    };
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // authTypes from reflector
    const authTypes: AuthTypeEnum[] = this.reflector.getAllAndOverride(
      AUTH_TYPE_KEY,
      [context.getHandler(), context.getClass()],
    ) ?? [AuthenticationGuard.defaultAuthType];

    const authMode: AuthModeEnum =
      this.reflector.getAllAndOverride(AUTH_MODE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? AuthModeEnum.ANY;

    // array of guards
    const guards = authTypes
      .map((authType) => this.authTypeGuardMap[authType])
      .flat();

    // Default error
    const defaultError = new UnauthorizedException();

    // loop through each of the guard and fire canActivate

    if (authMode === AuthModeEnum.ALL) {
      // AND semantics: every guard must pass
      for (const guard of guards) {
        let error: Error | null = null;

        const canActivate = (await Promise.resolve(
          guard.canActivate(context),
        ).catch((err: Error) => ((error = err), false))) as boolean | Error;

        if (error || !canActivate) throw error ?? defaultError;
      }

      return true;
    } else {
      // ANY semantics: at least one guard must pass
      for (const guard of guards) {
        const canActivate = await Promise.resolve(
          guard.canActivate(context),
        ).catch(() => false);

        if (canActivate) return true;
      }

      throw defaultError;
    }
  }
}
