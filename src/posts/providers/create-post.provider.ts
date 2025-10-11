import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreatePostDto } from '../dtos/create-post-dto';
import { Post as PostEntity } from '../post.entity';
import { UsersService } from 'src/users/providers/users.service';
import { TagsService } from 'src/tags/providers/tags.service';
import { QueryFailedError, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import type { ActiveUserData } from 'src/auth/interfaces/active-user.interface';
import { User } from 'src/users/user.entity';
import { Tag } from 'src/tags/tag.entity';

@Injectable()
export class CreatePostProvider {
  constructor(
    private readonly usersService: UsersService,
    private readonly tagsService: TagsService,
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
  ) {}
  // new provider for create, ability to use user from decorator, add some exception handling

  public async create(
    createPostDto: CreatePostDto,
    user: ActiveUserData,
  ): Promise<PostEntity> {
    let author: User | null = null;
    let tags: Tag[] | null = null;

    try {
      // Find author from db based on authorId
      author = await this.usersService.findOneById(user.sub);

      // Find tags from db based on tagIds
      tags = await this.tagsService.findMultipleTags(createPostDto.tags || []);
    } catch (error) {
      throw new ConflictException(error);
    }
    console.log(createPostDto.tags, tags);

    if (createPostDto.tags && createPostDto.tags.length !== tags.length) {
      throw new BadRequestException('Please check your tag Ids');
    }

    // Create Post
    let post = this.postsRepository.create({
      ...createPostDto,
      author,
      tags,
    });
    try {
      post = await this.postsRepository.save(post);
    } catch (error: unknown) {
      const code = (
        error as QueryFailedError & { driverError: { code: string } }
      ).driverError.code;

      switch (code) {
        case '23505':
          throw new ConflictException('Slug already exists');
        default:
          throw new BadRequestException(error);
      }
    }

    // return the post
    return post;
  }
}
