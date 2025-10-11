import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { SignInDto } from './dtos/sign-in.dto';
import { Auth } from './decorators/auth.decorator';
import { AuthModeEnum } from './enums/auth-mode.enum';
import { AuthTypeEnum } from './enums/auth-type.enum';
import { RefreshTokenDto } from './dtos/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @HttpCode(HttpStatus.OK)
  @Auth(AuthModeEnum.ANY, AuthTypeEnum.None)
  public signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('refresh-tokens')
  @HttpCode(HttpStatus.OK) 
  @Auth(AuthModeEnum.ANY, AuthTypeEnum.None)
  public refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    return this.authService.refreshTokens(refreshTokenDto);
  }
}
