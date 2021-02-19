import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class EditTodoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  public readonly text: string;

  @ApiProperty()
  @IsBoolean()
  public readonly completed: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }
}
