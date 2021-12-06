import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Gebruiker extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  naam!: string;

  @Column()
  gebruikersnaam!: string;

  @Column()
  wachtwoord!: string;
}
