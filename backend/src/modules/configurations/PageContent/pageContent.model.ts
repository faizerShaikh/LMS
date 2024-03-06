import {
  Column,
  DataType,
  Default,
  HasMany,
  Table,
} from 'sequelize-typescript';
import { gallery } from '../Gallery/gallery.model';
import { MyBaseModel } from 'src/core/base.model';
import { type } from '../metaData/dto/type.enum';

@Table({
  tableName: 'page-contents',
  paranoid:true,
  defaultScope:{
    order:[["orderBy","ASC"]]
  }
})
export class PageContent extends MyBaseModel { 
  override type= type.PAGE_CONTENT;

  @Column
  orderBy:number
  
  @Column({
    unique:true
  })
  name: string;

  @Default('media/default.png')
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
