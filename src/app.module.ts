import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DBCollections } from './enums/db_collections.enum';
import { CustomerSchema } from './schemas/customer.schema';
import { CustomerRepository } from './repositories/customers.repository';
import { LoanOffersRepository } from './repositories/loan_offer.repository';
import { LoanApplicationSchema } from './schemas/loan_application.schema';
import { LoanOfferSchema } from './schemas/loan_offer.schema';
import { LoanApplicationsRepository } from './repositories/loan_applications.repository';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/kredete-test'),
    MongooseModule.forFeature([
      {
        collection: DBCollections.CUSTOMERS,
        name: DBCollections.CUSTOMERS,
        schema: CustomerSchema,
      },
      {
        collection: DBCollections.LOAN_OFFERS,
        name: DBCollections.LOAN_OFFERS,
        schema: LoanOfferSchema,
      },
      {
        collection: DBCollections.LOAN_APPLICATIONS,
        name: DBCollections.LOAN_APPLICATIONS,
        schema: LoanApplicationSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    CustomerRepository,
    LoanOffersRepository,
    LoanApplicationsRepository,
  ],
})
export class AppModule {}
