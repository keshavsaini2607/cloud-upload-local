import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Bucket } from './schema/bucket.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class BucketsService {
  constructor(
    @InjectModel(Bucket.name) private bucketModel: mongoose.Model<Bucket>,
  ) {}

  async createBucket(bucket: Bucket) {
    const newBucket = new this.bucketModel(bucket);
    return await newBucket.save();
  }

  async listBuckets() {
    return await this.bucketModel.find().exec();
  }

  async deleteBucket(bucketId: string) {
    return await this.bucketModel.findByIdAndDelete(bucketId).exec();
  }

  async updateBucket(data: Bucket, bucketId: string) {
    return await this.bucketModel.findByIdAndUpdate(bucketId, data).exec();
  }
}
