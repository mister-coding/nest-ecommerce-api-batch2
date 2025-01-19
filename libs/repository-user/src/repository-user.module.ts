import { Module } from '@nestjs/common';
import { RepositoryUserService } from './repository-user.service';

@Module({
  providers: [RepositoryUserService],
  exports: [RepositoryUserService],
})
export class RepositoryUserModule {}
