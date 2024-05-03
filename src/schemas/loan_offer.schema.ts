import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ILoanOffer } from 'src/interfaces/loan_Offer.interface';

export type LoanOfferDocument = Document & LoanOfferSchemaDefinition;

@Schema({
  versionKey: false,
})
export class LoanOfferSchemaDefinition implements ILoanOffer {
  @Prop({ index: true })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  maxRequestAmount: number;
}

export const LoanOfferSchema = SchemaFactory.createForClass(
  LoanOfferSchemaDefinition,
);
