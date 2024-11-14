import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import {  Repository,UpdateResult  } from 'typeorm';
import { UUID } from 'crypto';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User)private userRepo: Repository<User>){}
  
  // async create(createUserDto: CreateUserDto) {
  //   const created =  await this.userRepo.save(createUserDto);
  //   return created;
  // }

  findAll() {
    return this.userRepo.find();
  }

  

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   const existingUser = await this.userRepo.findOneBy({id:id});
  //   existingUser.name = updateUserDto.name
  //   existingUser.age = updateUserDto.age
  //   existingUser.email = updateUserDto.email
  //   existingUser.password = updateUserDto.password
  //   const update = this.userRepo.save(existingUser)
  //   return existingUser
  // }

  remove(id: number) {
    const deletedArticle = this.userRepo.delete(id);
    return ` removes article with id:#${id} from the database >>{}`
  }

// this methods for auth Files
findOneByEmail(email: string): Promise<User | null> {
  return this.userRepo.findOneBy({ email });
}

findOneById(id: UUID): Promise<User | null> {
  return this.userRepo.findOneBy({ id });
}

create(user: User): Promise<User> {
  return this.userRepo.save(user);
}

update(userId: UUID, userInformation: Partial<User>): Promise<UpdateResult> {
  return this.userRepo.update(userId, userInformation);
}







}
