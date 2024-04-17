import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateEventDTO {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  startDayTime: Date;

  @IsString()
  @IsOptional()
  endDayTime: Date;

  @IsString()
  @IsOptional()
  deadLine: Date;

  @IsString()
  @IsOptional()
  created_by_id: string;

  @IsBoolean()
  @IsOptional()
  isFeatured: boolean;

  @IsString()
  @IsOptional()
  slug: string;

  @IsString()
  @IsOptional()
  eventLocation: string;

  @IsString()
  @IsOptional()
  eventType: string;

  @IsString()
  @IsOptional()
  webinarId: string;
}
