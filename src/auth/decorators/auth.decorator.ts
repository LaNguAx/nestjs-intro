import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthTypeEnum } from '../enums/auth-type.enum';
import { AUTH_TYPE_KEY } from '../constants/auth.constants';
import { AUTH_MODE_KEY } from '../constants/auth.constants';
import { AuthModeEnum } from '../enums/auth-mode.enum';

export const Auth = (mode: AuthModeEnum, ...authTypes: AuthTypeEnum[]) =>
  applyDecorators(
    SetMetadata(AUTH_TYPE_KEY, authTypes),
    SetMetadata(AUTH_MODE_KEY, mode),
  );
