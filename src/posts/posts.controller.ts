import {Body, Controller, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "../users/users.model";

@ApiTags('Посты пользователей')
@Controller('posts')
export class PostsController {

  constructor(private postService: PostsService) {}
  @ApiOperation({summary: 'Создание поста'})
  @ApiResponse({status: 200, type: Post})
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return await this.postService.create(dto, image)
  }
}
