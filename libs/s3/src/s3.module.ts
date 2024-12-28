import { Module } from '@nestjs/common';
import { S3Service } from './s3.service';
import { CommonModule } from '@app/common';

@Module({
  imports:[CommonModule],
  providers: [S3Service],
  exports: [S3Service],
})
export class S3Module {}
