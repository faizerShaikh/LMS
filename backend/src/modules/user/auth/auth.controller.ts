import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import {
  ChangePasswordDTO,
  ForgetPasswordDTO,
  LoginUserDTO,
  VerifyOTP,
} from './dtos';
import { Public } from 'src/core/decorators';

@Public()
@Controller('user/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  loginUser(@Body() loginUser: LoginUserDTO) {
    return this.authService.login(loginUser);
  }

  @Post('get-forget-password-otp')
  getForgetPasswordOTP(@Body() forgetPassword: ForgetPasswordDTO) {
    return this.authService.getForgetPasswordOTP(forgetPassword);
  }

  @Post('verify-otp')
  verifyOTP(@Body() forgetPassword: VerifyOTP) {
    return this.authService.verifyOTP(forgetPassword);
  }

  @Post('change-password')
  changePassword(@Body() changePassword: ChangePasswordDTO) {
    return this.authService.changePassword(changePassword);
  }
}
