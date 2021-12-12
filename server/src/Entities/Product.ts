import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  naam!: string;

  @Column()
  afbeelding?: string;

  @Column()
  omschrijving?: string;

  @Column()
  prijs?: string;
}
