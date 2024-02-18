import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({tableName: "posts"})
export class Post extends Model<Post, PostCreationAttrs> {

  @ApiProperty({example: 1, description: "Уникальный идентификатор"})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'Название', description: "Название поста"})
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @ApiProperty({example: "Контент", description: "Контент поста"})
  @Column({type: DataType.STRING, allowNull: false})
  content: string;

  @ApiProperty({example: 'src://image.png', description: "Фото для поста"})
  @Column({type: DataType.STRING})
  image: string;

  @ApiProperty({example: 1, description: "ID пользователя"})
  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId: number;

  @BelongsTo(() => User)
  author: User;
}