import { CustomLoggerService } from '@app/common/logger/custom-logger/custom-logger.service';
import { S3Service } from '@app/s3';
import { Body, Controller, InternalServerErrorException, Post, UploadedFile } from '@nestjs/common';
import { createReadStream, existsSync, unlinkSync } from 'fs';
import { UploadImageDto } from './dto/upload-image.dto';

@Controller('image')
export class ImageController {
    private logger = new CustomLoggerService(ImageController.name);

    constructor(private awss3: S3Service){}

    @Post('upload')
    async upload(
      @UploadedFile() file: Express.Multer.File,
      @Body() data: UploadImageDto,
    ) {
      if (file) {
        const fileLocal = createReadStream(file.path);
        const name = file.path;
        const upload = await this.awss3.upload(fileLocal, name);
        data.media_name = file.originalname;
        data.media_path = file.path;
        data.url = this.awss3.publicUrl(file.path);
        data.media_type = file.mimetype;
        data.size = file.size;
  
        if (upload) {
          if (existsSync(file.path)) {
            this.logger.log('Remove local temporary upload image ', file.path);
            unlinkSync(file.path);
          }
        }
        return {
          data: data,
          message: 'upload image success',
        };
      }
      throw new InternalServerErrorException('Upload image error');
    }
    
}
