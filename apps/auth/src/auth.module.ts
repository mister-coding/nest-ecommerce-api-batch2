import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { S3Module } from '@app/s3';
import { CommonModule } from '@app/common';

@Module({
  imports: [
    S3Module,
    CommonModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
