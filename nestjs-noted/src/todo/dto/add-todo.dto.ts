import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class AddTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public readonly title: string;

  @IsString()
  @ApiProperty()
  public readonly text: string;

  public constructor(opts?: Partial<AddTodoDto>) {
    Object.assign(this, opts);
  }
}
