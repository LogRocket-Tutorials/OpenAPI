import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @ApiProperty({ example: 1, description: 'Auto Generated Id' })
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  @ApiProperty({ example: 'Clean the yard', description: 'Title for todo' })
  public title: string;

  @Column()
  @ApiProperty({ example: 'Clean yard at 5pm', description: 'Body of todo' })
  public text: string;

  @Column()
  public completed: boolean;

  public constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
    this.completed = false;
  }
}
