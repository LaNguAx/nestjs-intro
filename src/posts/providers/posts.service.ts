import { Injectable, Post } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post as PostEntity } from '../post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postsRepository: Repository<PostEntity>,
    private readonly usersService: UsersService,
  ) {}

  public findAll(userId: string) {
    // Users Service
    // Find a User

    const user = this.usersService.findOneById(userId);

    console.log(user);

    return [
      { user, title: 'Post 1', content: 'Content 1' },
      { user, title: 'Post 2', content: 'Content 2' },
    ];
  }
}
