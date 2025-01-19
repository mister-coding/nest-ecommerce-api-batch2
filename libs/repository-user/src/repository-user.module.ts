import { Module } from '@nestjs/common';
import { RepositoryUserService } from './repository-user.service';
import { UserRepository } from './classes/user.repository';
import { ForgotPasswordRepository } from './classes/forgot_password.repository';

const repos = [
  UserRepository,
  ForgotPasswordRepository
]

@Module({
  providers: [RepositoryUserService,...repos],
  exports: [RepositoryUserService,...repos],
})
export class RepositoryUserModule {}
