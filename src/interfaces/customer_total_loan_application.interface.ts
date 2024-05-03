export interface ICustomerTotalLoanApplication {
  // customer name
  customerName: string;

  // customer id
  customerId: string;

  // the total of all the loan applications by this user
  totalLoanAmount: number;
}
