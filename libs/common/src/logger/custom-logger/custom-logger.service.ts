import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as Sentry from '@sentry/nestjs';

@Injectable()
export class CustomLoggerService extends ConsoleLogger {


    log(message: any, ...optionalParams: any[]): void {
        super.log(message, ...optionalParams);
        Sentry.withScope((scope) => {
            scope.setLevel('log');
            Sentry.captureMessage(message, 'log');
        });
    }

    error(message: any, ...optionalParams: any[]): void {
        super.error(message, ...optionalParams)
        Sentry.withScope((scope) => {
            scope.setLevel('error');
            Sentry.captureMessage(message, 'error');
          });
    }

    warn(message: any, ...optionalParams: any[]): void {
        super.warn(message, ...optionalParams)
    }

    debug(message: any, ...optionalParams: any[]): void {
        super.debug(message, ...optionalParams)
        Sentry.withScope((scope) => {
            scope.setLevel('debug');
            Sentry.captureMessage(message, 'debug');
        });
    }

    fatal(message: any, ...optionalParams: any[]): void {
        super.fatal(message, ...optionalParams)
    }
}
