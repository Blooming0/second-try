import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
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
}

