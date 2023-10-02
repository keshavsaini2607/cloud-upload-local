import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { File } from './schema/file.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class FileService {
  constructor(
    @InjectModel(File.name) private fileModel: mongoose.Model<File>,
  ) {}

  async saveFile(formData: any, file: any) {
    const newFile = new this.fileModel();
    newFile.bucket = formData.bucket;
    newFile.name = formData.name;
    newFile.file = file.buffer;
    return await newFile.save();
  }
}
