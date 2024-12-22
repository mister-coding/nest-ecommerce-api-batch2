import { CustomLoggerService } from '@app/common/logger/custom-logger/custom-logger.service';
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {

  private readonly logger = new CustomLoggerService(HttpLoggerMiddleware.name);

  use(req: any, res: any, next: () => void) {
    this.logger.log(`Request ${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
  }

}
