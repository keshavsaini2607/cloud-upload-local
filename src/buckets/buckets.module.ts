import { Module } from '@nestjs/common';
import { BucketsService } from './buckets.service';
import { BucketsController } from './buckets.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BucketSchema } from './schema/bucket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Bucket', schema: BucketSchema }]),
  ],
  providers: [BucketsService],
  controllers: [BucketsController],
})
export class BucketsModule {}
