import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ICustomer } from 'src/interfaces/customer.interface';

export type CustomerDocument = Document & CustomerSchemaDefinition;

@Schema({
  versionKey: false,
})
export class CustomerSchemaDefinition implements ICustomer {
  @Prop()
  fullName: string;

  @Prop({ index: true })
  _id: string;
}

export const CustomerSchema = SchemaFactory.createForClass(
  CustomerSchemaDefinition,
);
