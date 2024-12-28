import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello() {
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
