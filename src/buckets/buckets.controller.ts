import { Body, Controller, Post } from '@nestjs/common';
import { BucketsService } from './buckets.service';
import { Bucket } from './schema/bucket.schema';

@Controller('buckets')
export class BucketsController {
  constructor(private bucketService: BucketsService) {}

  @Post('create')
  async createBucket(@Body() bucketDto: Bucket) {
    return await this.bucketService.createBucket(bucketDto);
  }
}
