import {
  BelongsTo,
  Column,
  DataType,
  Default,
  HasMany,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { gallery } from '../Gallery/gallery.model';
import { MyBaseModel } from 'src/core/base.model';

@Table({
  tableName: 'page contents',
})
export class PageContent extends MyBaseModel { 

  @Column
  name: string;

  @Column
  coverImage: string;

  @Column
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  titleDescription: string;

  @Column({
    type: DataType.TEXT,
  })
  pageDescription: string;

  @HasMany(() => gallery, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  gallery: gallery;

}
