import {
  Body,
  Controller,
  HttpException,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './modules/auth/services/auth/auth.service';
import { AuthValidationReqDTO } from './modules/dtos/auth_validation.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AppController {
  constructor(private authService: AuthService) {}

  @Post('validate')
  async validate(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: AuthValidationReqDTO,
  ) {
    const validationSuccessful = await this.authService.verify(
      body.email,
      body.password,
    );

    if (validationSuccessful) {
      return res.status(200).json({ accessKey: validationSuccessful });
    }

    throw new HttpException('validation failed', 401);
  }
}
