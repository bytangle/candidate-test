import { Controller, Post } from '@nestjs/common';
import { AuthService } from './modules/auth/services/auth/auth.service';
import { AuthValidationReqDTO } from './modules/dtos/auth_validation.dto';

@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('validate')
  async validate(body: AuthValidationReqDTO) {
    const validationSuccessful = await this.authService.verify(
      body?.email,
      body?.password,
    );
  }
}
