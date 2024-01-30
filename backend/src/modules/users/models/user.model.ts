import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  Index,
  IsEmail,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import { BaseModel } from 'src/core/helpers';

@Table({
  tableName: 'users',
  modelName: 'User',
  defaultScope: {
    order: [['createdAt', 'DESC']],
  },
  paranoid: true,
  timestamps: true,
})
export class User extends BaseModel {
  @Index
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column
  id: string;

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

  @IsEmail
  @Unique({
    msg: 'User with this email already exists!',
    name: 'uniqe-email',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: {
      msg: 'User with this email already exists!',
      name: 'uniqe-email',
    },
    validate: {
      notNull: {
        msg: 'Email can not be empty',
      },
      notEmpty: {
        msg: 'Email can not be empty',
      },
    },
  })
  full_name: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @Column({ type: DataType.STRING })
  password: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: true })
  is_active: boolean;
}
