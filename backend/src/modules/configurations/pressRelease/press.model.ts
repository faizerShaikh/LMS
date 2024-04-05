import {
  Column,
  DataType,
  Default,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'press-releases',
  paranoid: true,
  defaultScope: {
    order: [['updatedAt', 'ASC']],
  },
})
export class Press extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column
  link: string;

  @Default('media/default.png')
  @Column
  coverImage: string;

  @Default(false)
  @Column
  isFeatured: boolean;
}
