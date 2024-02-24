import {
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
import { MetaData } from '../Meta Data/meta.model';

@Table({
  tableName: 'page contents',
})
export class PageContent extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

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

  @HasOne(()=>MetaData)
  metaData:MetaData
}
