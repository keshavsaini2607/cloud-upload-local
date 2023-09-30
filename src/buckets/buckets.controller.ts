import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { BucketsService } from './buckets.service';
import { Bucket } from './schema/bucket.schema';

@Controller('buckets')
export class BucketsController {
  constructor(private bucketService: BucketsService) {}

  @Post('create')
  async createBucket(@Body() bucketDto: Bucket) {
    return await this.bucketService.createBucket(bucketDto);
  }

  @Get('list')
  async listBuckets() {
    return await this.bucketService.listBuckets();
  }

  @Delete('delete')
  async deleteBucket(@Body() { bucketId }) {
    return await this.bucketService.deleteBucket(bucketId);
  }
}
