import { Controller, Get, HttpException, Post, Res } from '@nestjs/common';
import { AuthService } from './modules/auth/services/auth/auth.service';
import { AuthValidationReqDTO } from './dtos/auth_validation.dto';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private appService: AppService,
  ) {}

  /**
   * @description return the access key after verification
   * @param body login credentials
   * @param response
   * @returns
   */
  @Post('auth/login')
  async login(body: AuthValidationReqDTO, @Res() response: Response) {
    const accessKey = await this.authService.verify(
      body?.email,
      body?.password,
    );

    if (!accessKey) {
      throw new HttpException('invalid username or password', 401);
    }

    return response.status(200).json({ accessKey });
  }

  /**
   * @description get loan summaries of customers
   * @param response
   * @returns
   */
  @Get('customers/loans-summary')
  async getCustomerLoanApplications(@Res() response: Response) {
    const result = await this.appService.getCustomersLoanApplicationSummaries();

    return response.status(200).json({ summary: result });
  }
}
