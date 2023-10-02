import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('save')
  @UseInterceptors(FileInterceptor('file'))
  async saveFile(
    @Body() formData: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.fileService.saveFile(formData, file);
  }
}
