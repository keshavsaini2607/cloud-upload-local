import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { File } from './schema/file.schema';
import * as mongoose from 'mongoose';
import { ResponseHelper } from 'src/helpers/ResponseHelper';

@Injectable()
export class FileService {
  constructor(
    @InjectModel(File.name) private fileModel: mongoose.Model<File>,
  ) {}

  async saveFile(formData: any, file: any) {
    try {
      const newFile = new this.fileModel();
      newFile.bucket = formData.bucket;
      newFile.name = formData.name;
      newFile.file = file.buffer;
      await newFile.save();
      return ResponseHelper(true, 'File saved successfully');
    } catch (error) {
      throw new Error('Failed to save the file: ' + error.message);
    }
  }

  async getFilesFromBucket(bucketId: string) {
    try {
      return await this.fileModel.find({ bucket: bucketId });
    } catch (error) {
      throw new NotFoundException('Files not found for the specified bucket');
    }
  }

  async deleteFile(fileId: string) {
    try {
      const deletedFile = await this.fileModel.findByIdAndDelete(fileId).exec();
      if (!deletedFile) {
        throw new NotFoundException('File not found');
      }
      return ResponseHelper(true, 'File deleted successfully');
    } catch (error) {
      throw new Error('Failed to delete the file: ' + error.message);
    }
  }

  // can update the name as well as the bucket this file resides in
  async updateFile(data: any, fileId: string) {
    try {
      const updatedFile = await this.fileModel
        .findByIdAndUpdate(
          fileId,
          { name: data.name, bucket: data.bucket },
          { new: true },
        )
        .exec();

      if (!updatedFile) {
        throw new NotFoundException('File not found');
      }

      return updatedFile;
    } catch (error) {
      throw new Error('Failed to update the file: ' + error.message);
    }
  }
}
