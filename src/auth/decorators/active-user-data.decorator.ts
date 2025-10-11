import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { REQUEST_USER_KEY } from '../constants/auth.constants';
import { Request } from 'express';
import type { ActiveUserData } from '../interfaces/active-user.interface';

export const ActiveUser = createParamDecorator(
  (field: keyof ActiveUserData | undefined, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    const user = request[REQUEST_USER_KEY] as ActiveUserData;

    return field ? user?.[field] : user;
  },
);
