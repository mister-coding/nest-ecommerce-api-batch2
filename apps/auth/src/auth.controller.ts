import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello() {
    console.log("Test env : ",process.env.APP_NAME);
    return{
      data:  this.authService.getHello()
    }
  }
}
