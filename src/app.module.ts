import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; //configuration module witch is relate with Env. variable
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BookingController } from './booking/booking.controller';
// import { BookingService } from './booking/booking.service';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Payment } from './payment/entities/payment.entity';
import { ArticleModule } from './article/article.module';
import { Payment } from './payment/entities/payment.entity';
import { UserModule } from './user/user.module';


@Module({    
  imports: [
    BookingModule,// (import anything from code ) called: static registration 
    PaymentModule,
    ConfigModule.forRoot(),//(import anything out of code scope *Library*) called: dynamic registration 
    TypeOrmModule.forRoot({  
      type: 'postgres',//نوع البيانات المستخدمه
      host: process.env.HOST,//هذا راح يكون عباره عن رابط لقاعدة البيانات لكن في بيئة التطوير اكيد انه لوكال هوست
      port: process.env.DB_PORT as any,//as any << البورت عادتا مايكون رقم فراح يطلع لك خطأ في حال دخلته بطريقة الانفايرومنت عشان كذا خليناه 
      username: process.env.DB_USERNAME,
      password: '',
      database: process.env.DB_DATABASE,
      entities: [Payment],//لا تنساها هذي لربط الانتيتيز  الموجوده عندك بالقاعده / there is best way to do this which is (Auto load entities)
      synchronize: false,//migrationاي تغيير في ملفات الانتيتيز راح ينعكس على جداول قاعدة البيانات ////مع العلم ان هذي ليست الممارسه الصحيحه بل الممارسه الصحيحه ربطها بما يعرف ب 
      autoLoadEntities:true,// Auto load entities
      logging: false,//for migration
    }), ArticleModule, UserModule, 
  ],//هذا تستفيد منه في حال جبت سيرفس خارجيه تسويلها امبورت من هنا , بس تأكد انك مسويلها اكسبورت من مكانها 
  controllers: [AppController],// هذا المكان اللي تعرف فيه الاند بوينت وتسوي من خلاله الريكوست ويرجعلك الريسبونس
  providers: [AppService],// حسب منظومة (نست )لازم تعطي بروفايدر لأني كونترولر مو بس تعرّف السيرفس داخل الكلاس تبع الكونترولر ولا ماسويت هذا الشئ بيعطيك ايرور يوضح لك فيه ان الابكونترولر ماله بروفايدر
  
})
export class AppModule {}
