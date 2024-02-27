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
import { type } from './dto/type.enum';
import { Events } from '../event/event.model';
import { Faq } from '../faq/faq.model';
import { Blog } from 'src/modules/blog/model';
import { CourseSpecialization } from '../course-specialization/model';
import { Press } from '../pressRelease/press.model';
import { PageContent } from '../PageContent/pageContent.model';
import { University } from '../university/model';
import { Course } from '../course/model';
import { GlobalPartner } from '../globalPartner/global-partner.model';
import { Contacts } from '../cotacDetails/contact.model';

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
    allowNull:true,
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

  @Column
  type: type;

  @Default(false)
  @Column
  isRefrenced: boolean;
  
  @Column
  slug: string;
  
}
