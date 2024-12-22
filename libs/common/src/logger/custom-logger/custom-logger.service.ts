import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class CustomLoggerService  extends ConsoleLogger{


    log(message: any, ...optionalParams: any[]): void {
        super.log(message,...optionalParams)
    }

    error(message: any, ...optionalParams: any[]): void {
        console.log("Error from custom logger service");
        super.error(message,...optionalParams)
    }

    warn(message: any, ...optionalParams: any[]): void {
        super.warn(message,...optionalParams)
    }

    debug(message: any, ...optionalParams: any[]): void {
        super.debug(message,...optionalParams)
    }

    fatal(message: any, ...optionalParams: any[]): void {
        super.fatal(message,...optionalParams)
    }
}
