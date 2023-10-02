import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bucket } from './schema/bucket.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BucketsService {
  constructor(
    @InjectModel(Bucket.name) private bucketModel: mongoose.Model<Bucket>,
  ) {}

  async createBucket(bucket: Bucket) {
    try {
      const newBucket = new this.bucketModel(bucket);
      await newBucket.save();
      return { message: 'Bucket created successfully' };
    } catch (error) {
      throw new Error('Failed to create the bucket: ' + error.message);
    }
  }

  async listBuckets() {
    try {
      return await this.bucketModel.find().exec();
    } catch (error) {
      throw new NotFoundException('Buckets not found');
    }
  }

  async deleteBucket(bucketId: string) {
    try {
      const deletedBucket = await this.bucketModel
        .findByIdAndDelete(bucketId)
        .exec();
      if (!deletedBucket) {
        throw new NotFoundException('Bucket not found');
      }
      return { message: 'Bucket deleted successfully' };
    } catch (error) {
      throw new Error('Failed to delete the bucket: ' + error.message);
    }
  }

  async updateBucket(data: Bucket, bucketId: string) {
    try {
      await this.bucketModel.findByIdAndUpdate(bucketId, data).exec();
      return { message: 'Bucket updated successfully' };
    } catch (error) {
      throw new Error('Failed to update the bucket: ' + error.message);
    }
  }
}
