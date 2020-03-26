import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;
}
