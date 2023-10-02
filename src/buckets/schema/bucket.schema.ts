import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum ContentType {
  IMAGE = 'image',
  DOCUMENT = 'document',
  OTHER = 'other',
}

@Schema({ timestamps: true })
export class Bucket {
  @Prop({ required: true })
  name: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: true })
  type: ContentType;
}

export const BucketSchema = SchemaFactory.createForClass(Bucket);
