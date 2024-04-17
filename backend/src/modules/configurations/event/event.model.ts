import {
  Column,
  DataType,
  Table,
  ForeignKey,
  BelongsTo,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  IsUUID,
} from 'sequelize-typescript';
import { MyBaseModel } from 'src/core/base.model';
import { User } from 'src/modules/user/users/models/user.model';
import { EventRegistration } from './modules/eventRegistration/eventRegistration.model';
import { MetaDataType } from '../MetaData/dto/type.enum';
import { location } from './dtos/event.enum';
import { Webinar } from './modules/webinar/webinar.model';
import { EventFeatureType } from './enum';

@Table({
  tableName: 'event-features',
  modelName: 'EventFeature',
  paranoid: true,
})
export class EventFeature extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id: string;

  @ForeignKey(() => Events)
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Event ID can not be empty',
      },
      notEmpty: {
        msg: 'Event ID can not be empty',
      },
    },
  })
  eventId: string;

  @Column({
    type: DataType.STRING,
  })
  image: string;

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
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Order can not be empty',
      },
      notEmpty: {
        msg: 'Order can not be empty',
      },
    },
  })
  order: number;

  @Column({
    type: DataType.STRING(500),
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
  desription: string;

  @Column({
    type: DataType.ENUM(...Object.values(EventFeatureType)),
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
  type: string;
}

@Table({
  tableName: 'events',
  modelName: 'Events',
  paranoid: true,
})
export class Events extends MyBaseModel {
  override type: MetaDataType.EVENT;
  @Column({
    type: DataType.STRING,
    // allowNull: false,
    // validate: {
    //   notNull: {
    //     msg: 'Name can not be empty',
    //   },
    //   notEmpty: {
    //     msg: 'Name can not be empty',
    //   },
    // },
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    // allowNull: false,
    // validate: {
    //   notNull: {
    //     msg: 'Description can not be empty',
    //   },
    //   notEmpty: {
    //     msg: 'Description can not be empty',
    //   },
    // },
  })
  description: string;

  @Default('/media/default.png')
  @Column(DataType.STRING)
  eventImage: string;

  @Column({
    type: DataType.TEXT,
    defaultValue: '[]',
    get() {
      const value = this.getDataValue('stratigicPartners');
      return value ? JSON.parse(value) : null;
    },
    set(value: any) {
      this.setDataValue('stratigicPartners', JSON.stringify(value));
    },
  })
  stratigicPartners: string;

  @Column(DataType.DATE)
  startDayTime: Date;

  @Column(DataType.DATE)
  endDayTime: Date;

  @Column(DataType.DATE)
  deadLine: Date;

  @Column(DataType.STRING)
  eventType: string;

  @Column
  eventLocation: location;

  @Column(DataType.BOOLEAN)
  isFeatured: boolean;

  @Column
  syllabus:string

  @ForeignKey(() => User)
  created_by_id: string;

  @BelongsTo(() => User)
  created_by: User;

  @HasMany(() => EventRegistration, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  eventRegistrations: EventRegistration[];

  @HasMany(() => EventFeature, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  eventFeatures: EventFeature[];

  @HasMany(() => EventFeature, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  applicationProcess: EventFeature[];

  @HasMany(() => EventFeature, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  selectionProcess: EventFeature[];

  @HasMany(() => EventFeature, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  winners: EventFeature[];

  @ForeignKey(() => Webinar)
  @Column
  webinarId: string;
}
