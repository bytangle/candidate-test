import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DBCollections } from 'src/enums/db_collections.enum';
import { ILoanApplication } from 'src/interfaces/loan_application.interface';
import { LoanApplicationDocument } from 'src/schemas/loan_application.schema';

const loanApplications: ILoanApplication[] = [
  {
    _id: '7223834',
    customerId: '4455',
    amount: 50_000,
    loanOfferId: '29223',
  },
  {
    _id: '991813223',
    customerId: '1992',
    amount: 172_000,
    loanOfferId: '12392',
  },
  {
    _id: '92122283223',
    customerId: '1992',
    amount: 100_000,
    loanOfferId: '12392',
  },
  {
    _id: '991113223',
    customerId: '2233',
    amount: 67_000,
    loanOfferId: '29223',
  },
  {
    _id: '9918233223',
    customerId: '1992',
    amount: 400_000,
    loanOfferId: '12392',
  },
  {
    _id: '9918993223',
    customerId: '1220',
    amount: 92_000,
    loanOfferId: '12392',
  },
  {
    _id: '12201223',
    customerId: '1220',
    amount: 192_000,
    loanOfferId: '12392',
  },
  {
    _id: '1832232393',
    customerId: '4455',
    amount: 2_000,
    loanOfferId: '29223',
  },
  {
    _id: '001823483223',
    customerId: '1220',
    amount: 202_000,
    loanOfferId: '12392',
  },
  {
    _id: '91291823483223',
    customerId: '4455',
    amount: 122_000,
    loanOfferId: '29223',
  },
  {
    _id: '991828283223',
    customerId: '1220',
    amount: 512_000,
    loanOfferId: '29223',
  },
  {
    _id: '91233483223',
    customerId: '4455',
    amount: 128_000,
    loanOfferId: '29223',
  },
  {
    _id: '39923483223',
    customerId: '2233',
    amount: 712_000,
    loanOfferId: '12392',
  },
];

@Injectable()
export class LoanApplicationsRepository {
  constructor(
    @InjectModel(DBCollections.LOAN_APPLICATIONS)
    public store: Model<LoanApplicationDocument>,
  ) {
    this._seed();
  }

  private async _seed() {
    for (const loanApplication of loanApplications) {
      const exists = await this.store.exists({ _id: loanApplication?._id });

      if (exists) continue;

      await this.store.create(loanApplication);
    }
  }
}
