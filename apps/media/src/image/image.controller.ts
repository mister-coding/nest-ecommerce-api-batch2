import { CustomLoggerService } from '@app/common/logger/custom-logger/custom-logger.service';
import { S3Service } from '@app/s3';
import { Body, Controller, InternalServerErrorException, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { createReadStream, existsSync, unlinkSync } from 'fs';
import { UploadImageDto } from './dto/upload-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('image')
export class ImageController {
  private logger = new CustomLoggerService(ImageController.name);

  constructor(private awss3: S3Service) { }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${new Date().getTime()}-${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
  )
  async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() data: UploadImageDto,
  ) {
    try {
      if (file) {
        this.logger.debug("file",file)
        const fileLocal = createReadStream(file.path);
        const name = file.originalname;
        const upload = await this.awss3.upload(fileLocal, name);
        data.media_name = file.originalname;
        data.media_path =name;
        data.url = this.awss3.publicUrl(name);
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
    } catch (error) {
      throw new InternalServerErrorException(error);
    }

  }

}
