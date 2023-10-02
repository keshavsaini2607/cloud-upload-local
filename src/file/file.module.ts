import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './schema/file.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'File', schema: FileSchema }])],
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
