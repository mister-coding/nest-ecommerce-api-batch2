import { Controller, Get, HttpException, HttpStatus, Inject, OnModuleInit } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientGrpc } from '@nestjs/microservices';
import { User, UserService } from 'grpc/user.grpc';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';

@Controller()
export class AuthController implements OnModuleInit {

  private userServices: UserService

  constructor(
    private readonly authService: AuthService,
    @Inject('USER_PACKAGE') private client: ClientGrpc) { }

  onModuleInit() {
    this.userServices = this.client.getService<UserService>('UserService');
  }

  @Get()
  getHello() {
    console.log("Test env : ", process.env.APP_NAME);
    return {
      data: this.authService.getHello()
    }
  }

  @Get('test-grpc')
  async testGetUser() {
    const data = await this.userServices.FindByEmail({ email: 'abc@gmail.com' });
    // const testData = data.toPromise()
    const user = await firstValueFrom(data);
    return { data: user };
  }

  @Get('test-user')
  async getUser() {
    const data = await this.authService.testGetUser();
    return { data }
  }

  @Get('test-product')
  async getProduct() {
    const data = await this.authService.testGetProduct();
    return { data }
  }

  @Get('test-create-media')
  async createMedia() {
    const data = await this.authService.testCreateMedia();
    return { data }
  }



}
