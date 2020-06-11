import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Estoques1591903546755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table ({
            name:'estoques',
            columns:[
                {
                    name:'id_estoques',
                    type: 'int',
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: ''
                }
            ]
        })

        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
