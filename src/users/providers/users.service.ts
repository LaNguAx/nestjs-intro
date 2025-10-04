import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { User } from '../user.entity';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 * Service to connect to the Users data source and perform business operations.
 *
 * @description Handles user-related operations and integrates with `AuthService`.
 */
@Injectable()
export class UsersService {
  /**
   * Inject dependencies required by the service.
   *
   * @param authService Instance of `AuthService` used for authentication checks.
   */
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * Create a new user.
   *
   * @param createUserDto The user data to create.
   * @returns The created user.
   */
  public async createUser(createUserDto: CreateUserDto) {
    // check if user already exists
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    // handle exception -- for next section

    // create a new user
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);

    return newUser;
  }

  /**
   * Retrieve a paginated list of users matching the provided filters.
   *
   * @param getUserParamDto Filters and query parameters for fetching users.
   * @param _limit Maximum number of users to return per page.
   * @param _page Page number to retrieve (1-based).
   * @returns A list of lightweight user objects.
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    _limit: number,
    _page: number,
  ) {
    console.log(getUserParamDto);
    const isAuth = this.authService.isAuth();

    console.log(isAuth);

    return [
      {
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        firstName: 'Jane',
        email: 'jane@doe.com',
      },
    ];
  }

  /**
   * Retrieve a single user by their unique identifier.
   *
   * @param _id The unique identifier of the user.
   * @returns A lightweight user object if found.
   */
  public findOneById(_id: string) {
    return {
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
