import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post-dto';
import { PatchPostDto } from './dtos/patch-post-dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * GET localhost:3000/posts/:userId
   */
  @Get('{/:userId}')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
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
  public createPost(@Body() createPostDto: CreatePostDto) {
    return createPostDto;
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
  public updatePost(@Body() patchedPostDto: PatchPostDto) {
    return patchedPostDto;
  }
}
