import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { query } from "express";

export class Stocks1592086724248 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'stocks',
            columns:[
                {
                    name:"id_stocks",
                    type:"int",
                    isGenerated:true,
                    generationStrategy:"increment",
                    isNullable:false,
                    isPrimary:true
                },
                {
                    name:"product_name",
                    type:"varchar",
                    isNullable:false,
                    length:"30"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('stocks')
    }

}
