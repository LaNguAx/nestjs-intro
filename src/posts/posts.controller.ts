import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post-dto';
import { PatchPostDto } from './dtos/patch-post-dto';
import { Post as PostEntity } from './post.entity';
import { GetPostsDto } from './dtos/get-posts.dto';
import { ActiveUser } from 'src/auth/decorators/active-user-data.decorator';
import type { ActiveUserData } from 'src/auth/interfaces/active-user.interface';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * GET localhost:3000/posts/:userId
   */
  @Get('{/:userId}')
  public getPosts(
    @Param('userId') userId: string,
    @Query() postQuery: GetPostsDto,
  ) {
    return this.postsService.findAll(postQuery, userId);
  }

  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post created successfully.',
    type: CreatePostDto,
  })
  @ApiOperation({
    summary: 'Create a new post',
    description: 'You can create a new post with this endpoint.',
  })
  @ApiBody({
    type: CreatePostDto,
  })
  @Post()
  public createPost(
    @Body() createPostDto: CreatePostDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    return this.postsService.create(createPostDto, user);
  }

  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if your post updated successfully.',
    type: PatchPostDto,
  })
  @ApiOperation({
    summary: 'Update a post',
    description: 'You can update a post with this endpoint.',
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto): Promise<PostEntity> {
    return this.postsService.update(patchPostDto);
  }

  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if your post deleted successfully.',
    type: Number,
    schema: {
      type: 'number',
    },
  })
  @ApiOperation({
    summary: 'Delete a post',
    description: 'You can delete a post with this endpoint.',
  })
  @Delete()
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.delete(id);
  }
}
