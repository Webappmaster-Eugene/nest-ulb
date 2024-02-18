import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class CreatePostDto {

  @ApiProperty({example: 'Название', description: "Название поста"})
  @IsString({message: "Поле должно быть строкой"})
  title: string;

  @ApiProperty({example: 'Контент', description: "Название поста"})
  @IsString({message: "Поле должно быть строкой"})
  content: string;

  @ApiProperty({example: '1', description: "ID пользователя"})
  userId: number;
}