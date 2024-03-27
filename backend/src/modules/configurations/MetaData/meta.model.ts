import {
  Column,
  DataType,
  Default,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { MetaDataType } from './dto/type.enum';

@Table({
  tableName: 'meta-data',
})
export class MetaData extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column({
    allowNull: true,
  })
  keywords: string;

  @Column
  str: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    validate: {
      len: [1, 150],
    },
  })
  description: string;

  @Column
  title: string;

  @Column
  subject: string;

  @Column
  copyright: string;

  @Column
  summary: string;

  @Column
  classification: string;

  @Column
  author: string;

  @Column
  owner: string;

  @Column
  url: string;

  @Column
  pageName: string;

  @Column
  category: string;

  @Column
  subtitle: string;

  @Column
  replyTo: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(MetaDataType),
  })
  type: MetaDataType;

  @Default(false)
  @Column
  isRefrenced: boolean;

  @Column
  slug: string;
}
