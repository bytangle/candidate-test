import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DBCollections } from 'src/enums/db_collections.enum';
import { ICustomer } from 'src/interfaces/customer.interface';
import { CustomerDocument } from 'src/schemas/customer.schema';

const customers: ICustomer[] = [
  { fullName: 'Flat Mountain', _id: '2233' },
  { fullName: 'Rounded Straight', _id: '1992' },
  { fullName: 'Mind Blowing', _id: '4455' },
  { fullName: 'Forsake Gee', _id: '1220' },
];

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(DBCollections.CUSTOMERS) public store: Model<CustomerDocument>,
  ) {
    this._seed();
  }

  private async _seed() {
    for (const customer of customers) {
      const exists = await this.store.exists({ _id: customer?._id });

      if (exists) continue;

      await this.store.create(customer);
    }
  }
}
