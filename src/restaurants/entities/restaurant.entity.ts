import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((is) => Number)
  id: number;

  @Field((is) => String)
  @Column()
  @IsString()
  @Length(5, 10)
  name: string;

  @Field((is) => Boolean, { defaultValue: true })
  @Column({ default: true })
  @IsOptional()
  @IsBoolean()
  isVegan?: boolean;

  @Field((is) => String)
  @Column()
  address: string;
}
