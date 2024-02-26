import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FeesStructureDTO {
  @IsNumber()
  @IsNotEmpty()
  indian_semester_fees: number;

  @IsNumber()
  @IsNotEmpty()
  indian_annual_fees: number;

  @IsNumber()
  @IsNotEmpty()
  foreign_semester_fees: number;

  @IsNumber()
  @IsNotEmpty()
  foreign_annual_fees: number;

  @IsString()
  @IsNotEmpty()
  notes: string;
}
