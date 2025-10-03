import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

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
