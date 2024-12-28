import { NestFactory } from '@nestjs/core';
import { MediaModule } from './media.module';
import { HttpExceptionFilter } from '@app/common/filters/http-exception/http-exception.filter';
import { CustomLoggerService } from '@app/common/logger/custom-logger/custom-logger.service';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MediaModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useLogger(app.get(CustomLoggerService));
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
