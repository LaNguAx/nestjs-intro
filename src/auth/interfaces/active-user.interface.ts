import type { AccessTokenPayloadType } from '../types/access-token-payload.type';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ActiveUserData
  extends Pick<AccessTokenPayloadType, 'sub' | 'email'> {}
