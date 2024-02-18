import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class BanUserDto {

  @ApiProperty({example: 'Хулиганство', description: "Причина бана"})
  @IsString({message: "Поле должно быть строкой"})
  readonly banReason: string;

  @ApiProperty({example: '12', description: "ID пользователя"})
  @IsNumber({}, {message: "Поле должно быть числом"})
  readonly userId: number;
}