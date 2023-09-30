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
}
