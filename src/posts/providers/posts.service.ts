import { Injectable, NotFoundException } from '@nestjs/common';
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
    // find the tags
    const tags = await this.tagsService.findMultipleTags(
      patchPostDto.tags || [],
    );

    // find the post
    const post = await this.postsRepository.findOneBy({ id: patchPostDto.id });

    if (!post) {
      throw new NotFoundException('Post not found');
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
    return this.postsRepository.save(post);
  }
}
