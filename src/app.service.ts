import { Injectable } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UUID } from 'crypto';
import { User } from './user/entities/user.entity';

@Injectable()
export class AppService {
  constructor(private userService: UserService) {}
  
  sum():number{
    return 10
  }
  name():string{
    return "Hassan"
  }
  fullName(){
    return "Hassan Yousef alhosyni"
  }
  personInfo(person){
    
    return `your name is :${person.name} \n and your age is ${person.age} `
  }
  nothing(any){
    return any
  }
  async getHello(userId: UUID): Promise<string> {
    const user: User = await this.userService.findOneById(userId);
    return `Hello ${user.firstName}!`;
  }
}

