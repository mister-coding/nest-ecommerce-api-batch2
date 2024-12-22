import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CommonService } from './common.service';
import { HttpLoggerMiddleware } from './middleware/http-logger/http-logger.middleware';
import { CustomLoggerService } from './logger/custom-logger/custom-logger.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './interceptors/response/response.interceptor';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[
    ConfigModule.forRoot()
  ],
  providers: [
    CommonService,
    CustomLoggerService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor
    }
  ],
  exports: [CommonService],
})
export class CommonModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes({ path: "*", method: RequestMethod.ALL })
  }

}
