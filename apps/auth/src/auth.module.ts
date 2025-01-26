import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { S3Module } from '@app/s3';
import { CommonModule } from '@app/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { cwd } from 'process';
import { RepositoryUserModule } from '@app/repository-user';
// import { PrismaModule } from '@app/prisma';

@Module({
  imports: [
    S3Module,
    CommonModule,
    // PrismaModule,
    RepositoryUserModule,
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50053',
          package: 'user',
          protoPath:[
             join(cwd(), './proto/user/user.proto')
          ],
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
