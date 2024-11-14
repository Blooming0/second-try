import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatTables1731604622128 implements MigrationInterface {
    name = 'CreatTables1731604622128'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "body" character varying NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment" ("id" SERIAL NOT NULL, "currency" character varying, "amount" integer NOT NULL, "region" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "payment"`);
        await queryRunner.query(`DROP TABLE "article"`);
    }

}
