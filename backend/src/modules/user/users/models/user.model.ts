import {
  Column,
  DataType,
  Table,
  IsUUID,
  PrimaryKey,
  Default,
  Model,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { RoleEnum } from '../../interface';
import { Blog } from 'src/modules/blog/model';
import { Events } from 'src/modules/configurations/event/event.model';
import { Leads } from 'src/modules/configurations/Lead/lead.model';

@Table({
  tableName: 'users',
  modelName: 'User',
  paranoid: true,
})
export class User extends Model<User> {
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
        msg: 'Name can not be empty',
      },
      notEmpty: {
        msg: 'Name can not be empty',
      },
    },
  })
  name: string;

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
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Password can not be empty',
      },
      notEmpty: {
        msg: 'Password can not be empty',
      },
    },
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Contact Number can not be empty',
      },
      notEmpty: {
        msg: 'Contact Number can not be empty',
      },
    },
  })
  contactNumber: string;

  @Column({
    type: DataType.ENUM(...Object.values(RoleEnum)),
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Contact Number can not be empty',
      },
      notEmpty: {
        msg: 'Contact Number can not be empty',
      },
    },
  })
  role: string;

  @HasMany(() => Blog, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  blogs: Blog[];

  @HasMany(() => Events, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    hooks: true,
  })
  event: Event[];

  @HasOne(()=>Leads,{
    onUpdate:'CASCADE',
    onDelete: 'CASCADE',
    hooks: true
  })
  lead:Leads
  
  @Column
  region:string
}
