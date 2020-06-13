import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Login1591989225725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'logins',
        columns: [
          {
            name: 'id_logins',
            type: 'int',
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
            length: '100',
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
            length: '50',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('logins');
  }
}
