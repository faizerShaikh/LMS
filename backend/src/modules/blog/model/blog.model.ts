
import { User } from 'src/modules/user/users/models/user.model';
import { BlogCategory } from '../modules/blog-category/model';
import { BelongsTo, Column, DataType, Default, ForeignKey, Table } from 'sequelize-typescript';
import { MyBaseModel } from 'src/core/base.model';
import { type } from 'src/modules/configurations/metaData/dto/type.enum';

@Table({
  tableName: 'blogs',
  modelName: 'Blog',
  paranoid: true,
})
export class Blog extends MyBaseModel {
  override type = type.BLOG
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

  @Default('/media/default.png')
  @Column({
    type: DataType.STRING,
  })
  blog_image: string;

  @Column({
    type: DataType.BOOLEAN,
    })
  is_featured: boolean;


  //@Default('c28512ff-aa8a-4ff3-ada8-fce8f8164f83')
  @ForeignKey(() => User)
  @Column
  created_by_id: string;

  @BelongsTo(() => User)
  created_by: User;

  @ForeignKey(() => BlogCategory)
  blog_category_id: string;

  @BelongsTo(() => BlogCategory)
  blog_category: BlogCategory;

}
