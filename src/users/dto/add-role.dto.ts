import {ApiProperty} from "@nestjs/swagger";
import {IS_STRING, IsNumber, IsString} from "class-validator";

export class AddRoleDto {

  @ApiProperty({example: 'ADMIN', description: "Роль пользователя"})
  @IsString({message: "Должно быть строкой"})
  readonly value: string;

  @ApiProperty({example: '12', description: "ID пользователя"})
  @IsNumber({}, {message: "Должно быть числом"})
  readonly userId: number;
}