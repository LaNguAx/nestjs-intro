import {
  ConflictException,
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import type { ConfigType } from '@nestjs/config';
import profileConfig from '../config/profile.config';
import { UsersCreateManyProvider } from './users-create-many.provider';
import { CreateManyUsersDto } from '../dtos/create-many-users.dto';
import { CreateUserProvider } from './create-user.provider';
import { FindOneUserByEmailProvider } from './find-one-user-by-email.provider';

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
    @Inject(profileConfig.KEY)
    private readonly profileConfiguration: ConfigType<typeof profileConfig>,

    /**
     * Inject UsersCreateManyProvider
     */
    private readonly usersCreateManyProvider: UsersCreateManyProvider,

    /**
     * Inject CreateUserProvider
     */
    private readonly createUserProvider: CreateUserProvider,

    /**
     * Inject FindOneUserByEmailProvider
     */
    private readonly findOneByEmailProvider: FindOneUserByEmailProvider,
  ) {}

  /**
   * Create a new user.
   *
   * @param createUserDto The user data to create.
   * @returns The created user.
   */
  public async createUser(createUserDto: CreateUserDto) {
    return await this.createUserProvider.createUser(createUserDto);
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
    // throw new HttpException(
    //   {
    //     status: HttpStatus.MOVED_PERMANENTLY,
    //     fileName: 'users.service.ts',
    //     error: 'The API endpoint has been moved permanently',
    //     lineNumber: 88,
    //   },
    //   HttpStatus.MOVED_PERMANENTLY,
    //   {
    //     cause: new Error(),
    //     description: 'Occured because the API endpoint was permanently moved.',
    //   },
    // );

    if (getUserParamDto.id) {
      return this.findOneById(getUserParamDto.id);
    }

    return this.usersRepository.find();
  }

  /**
   * Retrieve a single user by their unique identifier.
   *
   * @param id The unique identifier of the user.
   * @returns A lightweight user object if found.
   */
  public async findOneById(id: number) {
    let user: User | null = null;
    try {
      user = await this.usersRepository.findOneBy({ id });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later.',
        {
          description: 'Error connecting to the database',
        },
      );
    }

    if (!user) {
      throw new NotFoundException('User not found', {
        description: 'User not found',
      });
    }

    return user;
  }

  public async createMany(createManyUsersDto: CreateManyUsersDto) {
    return await this.usersCreateManyProvider.createMany(createManyUsersDto);
  }

  public async findOneByEmail(email: string) {
    return await this.findOneByEmailProvider.findOneByEmail(email);
  }
}
