import { Injectable } from '@nestjs/common';
import { LoanApplicationsRepository } from './repositories/loan_applications.repository';
import { CustomerRepository } from './repositories/customers.repository';
import { LoanOffersRepository } from './repositories/loan_offer.repository';
import { ICustomerTotalLoanApplication } from './interfaces/customer_total_loan_application.interface';

@Injectable()
export class AppService {
  constructor(
    // private loanApplications: LoanApplicationsRepository,
    // private customers: CustomerRepository,
    // private loanOffers: LoanOffersRepository,
  ) {}

  /**
   * @description get customer total applications
   * return the total loan application amount by each customer
   */
  async getCustomersLoanApplicationSummaries(): Promise<
    ICustomerTotalLoanApplication[]
  > {
    // const result = await this.loanApplications.store.aggregate([]);

    // return result as any;

    return [];
  }
}
