import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { CustomLoggerService } from '@app/common/logger/custom-logger/custom-logger.service';
import { HttpExceptionFilter } from '@app/common/filters/http-exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.useLogger(app.get(CustomLoggerService));
  // app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3001);
}
bootstrap();
