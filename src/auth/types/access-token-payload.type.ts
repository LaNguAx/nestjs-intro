export type AccessTokenPayloadType = {
  sub: number;
  email: string;
  iat: number;
  exp: number;
  aud?: string;
  iss?: string;
};
