import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommonModule } from '@app/common';

@Module({
  imports: [CommonModule.withSentry()],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
