import { TodoController } from './controllers';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities';
import { TodoService, TodoMapperService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo])
  ],
  providers: [
    TodoService,
    TodoMapperService
  ],
  controllers: [
    TodoController
  ]
})
export class TodoModule {}
