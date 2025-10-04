import { Column, Entity } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { PostTypeEnum } from './enums/post-type.enum';
import { PostStatusEnum } from './enums/post-status.enum';

@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'enum',
    enum: PostTypeEnum,
    nullable: false,
    default: PostTypeEnum.POST,
  })
  postType: PostTypeEnum;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'enum',
    enum: PostStatusEnum,
    nullable: false,
    default: PostStatusEnum.DRAFT,
  })
  status: PostStatusEnum;

  @Column({
    type: 'text',
    nullable: true,
  })
  content?: string;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  schema?: string;

  @Column({
    type: 'varchar',
    length: 1024,
    nullable: true,
  })
  featuredImageUrl?: string;

  @Column({
    type: 'timestamp', // 'datetime' in mysql
    nullable: true,
  })
  publishOn?: Date;

  // Work on these in lectures on relationships.
  // @Column({
  //   type: 'simple-array',
  //   nullable: true,
  // })
  // tags?: string[];

  // @Column({
  //   type: 'simple-json',
  //   nullable: true,
  // })
  // metaOptions?: { key: string; value: any }[];
}
