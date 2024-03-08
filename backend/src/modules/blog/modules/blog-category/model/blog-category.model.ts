import {
  Column,
  DataType,
  Default,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Blog } from '../../../model';
import { MyBaseModel } from 'src/core/base.model';

@Table({
  tableName: 'blog-categories',
  modelName: 'BlogCategory',
  paranoid: true,
})
export class BlogCategory extends MyBaseModel {

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Name can not be empty',
      },
      notEmpty: {
        msg: 'Name can not be empty',
      },
    },
  })
  name: string;

  @HasMany(() => Blog, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  blogs: Blog[];
}
