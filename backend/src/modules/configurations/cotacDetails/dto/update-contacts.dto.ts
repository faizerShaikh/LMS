import { PartialType } from '@nestjs/mapped-types';
import { ContactsDto } from './create-contacts.dto';

export class UpdateContactsDTo extends PartialType(ContactsDto) {}
