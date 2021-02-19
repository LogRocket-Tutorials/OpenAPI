import { Test, TestingModule } from '@nestjs/testing';
import { TodoMapperService } from './todo-mapper.service';
import { Todo } from './../../entities';
import { TodoDto } from './../../dto';

describe('TodoMapperService', () => {
  let service: TodoMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoMapperService],
    }).compile();

    service = module.get<TodoMapperService>(TodoMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert model to dto', () => {
    const todo = new Todo('test');
    
    expect(service.modelToDto(todo)).toEqual(new TodoDto({ title: 'test', completed: false }))
  });
});
