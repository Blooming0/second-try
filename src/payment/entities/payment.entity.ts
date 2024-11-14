import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()//you can put the table name inside the pantheses @Entity("payment") , and if you dont put anything the program will understand that the taple called payment regarde to file name (*payment*.entity.ts)
export class Payment {
    @PrimaryGeneratedColumn()//incress id by 1 in each column generated (auto incremented)
  id: number;

  @Column({nullable:true})//{nullable:true} means its okay to make the currency null , if this word dose not exist that's means you shuold put value . can't be null
  currency: string;

  @Column()
  amount: number;

  @Column()
  region: string;

  @Column({ default: true })
  isActive: boolean;
}
