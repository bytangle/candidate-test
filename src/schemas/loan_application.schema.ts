import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ILoanApplication } from 'src/interfaces/loan_application.interface';

export type LoanApplicationDocument = Document &
  LoanApplicationSchemaDefinition;

@Schema({
  versionKey: false,
})
export class LoanApplicationSchemaDefinition implements ILoanApplication {
  @Prop({ index: true })
  _id: string;

  @Prop()
  customerId: string;

  @Prop()
  amount: number;

  @Prop()
  loanOfferId: string;
}

export const LoanApplicationSchema = SchemaFactory.createForClass(
  LoanApplicationSchemaDefinition,
);
