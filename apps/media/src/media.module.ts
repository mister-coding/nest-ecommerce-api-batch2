import { Module } from '@nestjs/common';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';
import { ImageModule } from './image/image.module';
import { CommonModule } from '@app/common';

@Module({
  imports: [
    ImageModule,
    CommonModule.withSentry(),
  ],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
