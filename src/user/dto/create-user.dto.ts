import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(0, 50)
  firstName: string;

  @IsString()
  @Length(0, 50)
  lastName: string;
}
