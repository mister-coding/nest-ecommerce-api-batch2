import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  //grpcurl -plaintext -d '{ \"email\": \"abc@gmail.com\" }' localhost:50053 user.UserService.FindByEmail
  @GrpcMethod('UserService','FindByEmail')
  async findByEmail(data:any,metadata:Metadata,call:ServerUnaryCall<any,any>){
    return{
      name:"John",
      email:"John email"
    }
  }
}
