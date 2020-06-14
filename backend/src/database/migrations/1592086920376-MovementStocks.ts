import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class MovementStocks1592086920376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'stocks_movements',
            columns:[
                {
                    name:"id_stock_movement",
                    type:"int",
                    isNullable:false,
                    isPrimary:true,
                    isGenerated:true,
                    generationStrategy:"increment"
                },
                {
                    name:"id_stock",
                    type:"int",
                    isNullable:false,
                },
                {
                    name:"quantity",
                    type:"int",
                    isNullable:false,
                },
                {
                    name:"total_quantity",
                    type:"int",
                    isNullable:false,
                },
                {
                    name:"place",
                    type:"varchar",
                    isNullable:false,
                    length:"30"
                },
                {
                    name:"buy_date",
                    type:"date",
                    isNullable:false,
                },
                {
                    name:"price",
                    type:"float",
                    isNullable:false,
                }
                
            ]
        })).then(async(reponse)=>{
           await queryRunner.createForeignKey("stocks_movements",new TableForeignKey({
                columnNames: ["id_stock"],
                referencedColumnNames: ["id_stocks"],
                referencedTableName: "stocks",
                onDelete: "CASCADE"
            }))
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("stocks_movements")
    }

}
