import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { cwd } from 'process';
import { ReflectionService } from '@grpc/reflection';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50053',
      package: 'user',
      protoPath: [
        join(cwd(), './proto/user/user.proto')
      ],
      onLoadPackageDefinition: (pkg, server) => {
        new ReflectionService(pkg).addToServer(server);
      }
    }
  })
  app.startAllMicroservices()
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
