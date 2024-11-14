import { Controller, Get,Post,Query,Body,Req,Res } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './auth/decorators/user.decorator';
import { userInfo } from 'os';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}//هنا طبقنا مفهوم depedndency injection

  @Get()
  async getHello(@User() user): Promise<string> {
    return await this.appService.getHello(user.id);
  }
  @Get("/test")
  sum():number{
    return this.appService.sum();
  }
  @Post()
  name():string{
    return this.appService.name()
  }
  @Post("/fullname")
  fullName():string{
    return this.appService.fullName()
  }
  
  @Post("/person")
  personInfo(@Body()person,@Req() req,@Res() res){
    return this.appService.personInfo(person)
  }
  @Get("/nothing")
  sayHello(@Body()nothing){
    return this.appService.nothing(nothing)
  }

}
