import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Estoques1591915103263 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'stocks',
        columns: [
          {
            name: 'id_stocks',
            type: 'int',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'product_name',
            type: 'varchar',
            isNullable: false,
            length: '30',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('stocks');
  }
}
