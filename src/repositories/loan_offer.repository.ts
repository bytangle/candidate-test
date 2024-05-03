import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DBCollections } from 'src/enums/db_collections.enum';
import { ILoanOffer } from 'src/interfaces/loan_offer.interface';
import { LoanOfferDocument } from 'src/schemas/loan_offer.schema';

const loanOffers: ILoanOffer[] = [
  {
    name: 'Poverty alleviation loan',
    _id: '29223',
    maxRequestAmount: 1_0000_000,
  },
  {
    name: 'Take n run loan',
    _id: '12392',
    maxRequestAmount: 100_000_000,
  },
];

@Injectable()
export class LoanOffersRepository {
  constructor(
    @InjectModel(DBCollections.LOAN_OFFERS)
    public store: Model<LoanOfferDocument>,
  ) {
    this._seed();
  }

  private async _seed() {
    for (const loanOffer of loanOffers) {
      const exists = await this.store.exists({ _id: loanOffer?._id });

      if (exists) continue;

      await this.store.create(loanOffer);
    }
  }
}
