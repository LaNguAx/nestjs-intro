import {
  BadRequestException,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post as PostEntity } from '../post.entity';
import { CreatePostDto } from '../dtos/create-post-dto';
import { MetaOptionsService } from 'src/meta-options/providers/meta-options.service';
import { TagsService } from 'src/tags/providers/tags.service';
import { Tag } from 'src/tags/tag.entity';
import { PatchPostDto } from '../dtos/patch-post-dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
    private readonly usersService: UsersService,
    private readonly metaOptionsService: MetaOptionsService,
    private readonly tagsService: TagsService,
  ) {}

  public async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    // Find author from db based on authorId
    const author = await this.usersService.findOneById(createPostDto.authorId);

    // Find tags from db based on tagIds
    const tags = await this.tagsService.findMultipleTags(
      createPostDto.tags || [],
    );

    // Create Post
    const post = author
      ? this.postsRepository.create({
          ...createPostDto,
          author,
          tags,
        })
      : this.postsRepository.create({
          ...createPostDto,
          tags,
        });

    // return the post
    return this.postsRepository.save(post);
  }

  public findAll(userId: string) {
    // Users Service
    // Find a User

    const posts = this.postsRepository.find({
      relations: ['metaOptions'],
    });

    return posts;
  }

  public async delete(id: number) {
    await this.postsRepository.delete(id);

    // confirmation
    return { deleted: true, id };
  }

  public async update(patchPostDto: PatchPostDto) {
    let tags: Tag[] | null = null;
    let post: PostEntity | null = null;

    // find the tags
    const newPostTags = patchPostDto?.tags || [];

    try {
      tags = await this.tagsService.findMultipleTags(newPostTags);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later.',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    if (!tags || tags.length !== newPostTags.length) {
      throw new BadRequestException('Tags do not match', {
        description: 'Tags do not match',
      });
    }

    // find the post
    try {
      post = await this.postsRepository.findOneBy({ id: patchPostDto.id });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later.',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    if (!post) {
      throw new NotFoundException('Post not found', {
        description: 'Post not found',
      });
    }

    // update the post
    post.title = patchPostDto.title ?? post.title;
    post.slug = patchPostDto.slug ?? post.slug;
    post.content = patchPostDto.content ?? post.content;
    post.schema = patchPostDto.schema ?? post.schema;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishOn = patchPostDto.publishOn ?? post.publishOn;

    // assign the new tags
    post.tags = tags;

    // save the post and return
    try {
      post = await this.postsRepository.save(post);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later.',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    return post;
  }
}
