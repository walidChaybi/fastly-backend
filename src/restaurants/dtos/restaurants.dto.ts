import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';
import {
  PaginationInput,
  PaginationOutput,
} from 'src/common/dtos/pagination.dto';

@InputType()
export class RestaurantsInput extends PaginationInput {}

@ObjectType()
export class RestaurantsOutput extends PaginationOutput {
  @Field((type) => [Restaurant], { nullable: true })
  results?: Restaurant[];
}
