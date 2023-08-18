import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1692358384848 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL
      );

      CREATE TABLE vehicles (
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id),
        wheels INT NOT NULL,
        vehicle_type VARCHAR(255),
        vehicle_model VARCHAR(255)
      );

      CREATE TABLE bookings (
        id SERIAL PRIMARY KEY,
        vehicle_id INT REFERENCES vehicles(id),
        booking_date DATE NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE IF EXISTS bookings;');
    await queryRunner.query('DROP TABLE IF EXISTS vehicles;');
    await queryRunner.query('DROP TABLE IF EXISTS users;');
  }
}
