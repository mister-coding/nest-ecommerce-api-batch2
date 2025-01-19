import { Module } from '@nestjs/common';
import { RepositoryMediaService } from './repository-media.service';

@Module({
  providers: [RepositoryMediaService],
  exports: [RepositoryMediaService],
})
export class RepositoryMediaModule {}
