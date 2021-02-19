import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  @ApiProperty({ example: 1, description: 'Auto Generated Id' })
  public readonly id: number;

  @ApiProperty()
  @ApiProperty({ example: 'Clean the yard', description: 'Title for todo' })
  public readonly title: string;

  @ApiProperty()
  @ApiProperty({ example: 'Clean yard at 5pm', description: 'Body of todo' })
  public readonly text: string;

  @ApiProperty()
  public readonly completed: boolean;

  public constructor(opts?: Partial<TodoDto>) {
    Object.assign(this, opts);
  }
}
