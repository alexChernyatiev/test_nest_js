import { IsString, IsDate } from 'class-validator';

export class CreateCommentDTO {
  @IsString()
  author: string;

  @IsString()
  body: string;

  @IsDate()
  rated: Date;
}