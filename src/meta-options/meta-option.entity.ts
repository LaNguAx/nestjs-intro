import { Post } from 'src/posts/post.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UpdateDateColumn } from 'typeorm';

@Entity({ name: 'meta_options' }) // 'meta_options' is the table name in the database
export class MetaOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'jsonb',
    nullable: false,
  })
  metaValue: Record<string, unknown>;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToOne(() => Post, (post) => post.metaOptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  post: Post;
}
