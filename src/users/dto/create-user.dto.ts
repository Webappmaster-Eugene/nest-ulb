import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'user@mail.ru', description: "Почта пользователя"})
  @IsString({message: "Поле должно быть строкой"})
  @IsEmail()
  email: string;

  @ApiProperty({example: '1234556789', description: "Пароль пользователя"})
  @IsString({message: "Поле должно быть строкой"})
  @Length(4, 16, {message: "Не меньше 4 и не больше 16"})
  password: string;
}