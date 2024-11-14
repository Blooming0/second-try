import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
@Injectable()
export class PaymentService {

  constructor(@InjectRepository(Payment)private PaymentsRepo: Repository<Payment>){}//هذا البيمنت ريبو راح يكون هو الوسيط بين قاعدة البيانات و الكود فأي تحديث على الكود راح ينعكس مباشرة في جدول البيمنت الموجود في القاعده 

  async create(createPaymentDto: CreatePaymentDto) {
   const res = await this.PaymentsRepo.save(createPaymentDto)
    return res;
  }

  findAll() {
    const paymentsRecords = this.PaymentsRepo.find()//find() means => get all records 
    return paymentsRecords
  }

  findOne(id: number) {
    const existingPayment = this.PaymentsRepo.findOneBy({id})

    return `This action returns a #${id} payment :  ${ existingPayment}`;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {

    const existingPayment = await this.PaymentsRepo.findOneBy({id:id})//get id from repo 
    existingPayment.currency = updatePaymentDto.currency//modifaied the currency on memmory
    const udatedPayment = await this.PaymentsRepo.save(existingPayment)//save the change on the data base (writgh changeing things in data base)
    return existingPayment ;
  }

  remove(id: number) {
    const deletePayment = this.PaymentsRepo.delete(id)
    
    return `This removes a #${id} payment ${deletePayment}`;
  }
}
