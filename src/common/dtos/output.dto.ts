import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class loginInput extends PickType(User, ['email', 'password']) {}

@ObjectType()
export class CoreOutput {
  @Field((type) => String, { nullable: true })
  error?: string;

  @Field((type) => Boolean)
  ok: boolean;
}
