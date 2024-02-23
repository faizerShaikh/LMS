import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/modules/user/users/models/user.model';
import { BlogCategory } from '../modules/blog-category/model';
import { MetaData } from 'src/modules/configrations/Meta Data/meta.model';

@Table({
  tableName: 'blogs',
  modelName: 'Blog',
  paranoid: true,
})
export class Blog extends Model<Blog> {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Title can not be empty',
      },
      notEmpty: {
        msg: 'Title can not be empty',
      },
    },
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Description can not be empty',
      },
      notEmpty: {
        msg: 'Description can not be empty',
      },
    },
  })
  description: string;

  @Column({
    type: DataType.STRING,
  })
  blog_image: string;

  @Column({
    type: DataType.BOOLEAN,
    })
  is_featured: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Created By can not be empty',
      },
      notEmpty: {
        msg: 'Created By can not be empty',
      },
    },
  })
  @ForeignKey(() => User)
  created_by_id: string;

  @BelongsTo(() => User)
  created_by: User;

  // @Column({
  //   type: DataType.STRING,
  //   allowNull: false,
  //   validate: {
  //     notNull: {
  //       msg: 'Blog Category can not be empty',
  //     },
  //     notEmpty: {
  //       msg: 'Blog Category can not be empty',
  //     },
  //   },
  // })



  @ForeignKey(() => BlogCategory)
  blog_category_id: string;

  @BelongsTo(() => BlogCategory)
  blog_category: BlogCategory;

  @HasOne(()=>MetaData)
  metaData:MetaData
}
