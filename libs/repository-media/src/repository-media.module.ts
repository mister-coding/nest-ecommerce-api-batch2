import { Module } from '@nestjs/common';
import { RepositoryMediaService } from './repository-media.service';
import { MediaRepository } from './classes/media.repository';

const repos = [
  MediaRepository
];

@Module({
  providers: [RepositoryMediaService,...repos],
  exports: [RepositoryMediaService,...repos],
})
export class RepositoryMediaModule {}
