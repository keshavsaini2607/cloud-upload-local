import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema({ timestamps: true })
export class File {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Bucket' })
  bucket: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  file: Buffer;
}

export const FileSchema = SchemaFactory.createForClass(File);
