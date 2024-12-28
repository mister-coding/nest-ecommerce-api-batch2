import { CustomLoggerService } from '@app/common/logger/custom-logger/custom-logger.service';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

  private readonly logger = new CustomLoggerService(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus()??500;

    const { message }: any = exception.getResponse();

    this.logger.error(exception.message)
    
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: message ?? exception.message,
    });
    
  }

}
