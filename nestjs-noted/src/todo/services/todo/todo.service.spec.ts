import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './../../entities';
import { repositoryMockFactory, MockType } from './../../../utils/test/repository.mock';
import { TodoMapperService } from './../todo-mapper/todo-mapper.service';
import { Repository } from 'typeorm';

describe('TodoService', () => {
  let service: TodoService;
  let repository: MockType<Repository<Todo>>;
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoService,
        TodoMapperService,
        { provide: getRepositoryToken(Todo), useFactory: repositoryMockFactory }
      ],
    }).compile();
    repository = module.get<Repository<Todo>>(getRepositoryToken(Todo)) as unknown as MockType<Repository<Todo>>;
    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throws exception when todo not exists', async () => {
    repository.findOne.mockReturnValue(Promise.resolve(null));
    await expect(service.findOne(1)).rejects.toThrow('Not Found');
  });

});