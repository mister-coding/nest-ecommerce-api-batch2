import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';
import { CustomLoggerService } from '@app/common/logger/custom-logger/custom-logger.service';

@Controller()
export class UserController {

  private logger = new CustomLoggerService(UserController.name)

  constructor(private readonly userService: UserService) {}

  @Get()
  getHello() {
    throw new InternalServerErrorException("Error user");
    return this.userService.getHello();
  }

  //grpcurl -plaintext -d '{ \"email\": \"abc@gmail.com\" }' localhost:50053 user.UserService.FindByEmail
  @GrpcMethod('UserService','FindByEmail')
  async findByEmail(data:any){
    console.log("From grpc user ",data);
    return{
      name:"John",
      email:data.email
    }
  }

}
