import { Injectable } from '@nestjs/common';
import { Todo } from '../../entities';
import { TodoDto } from '../../dto';

@Injectable()
export class TodoMapperService {
  public modelToDto({ id, title, text, completed }: Todo): TodoDto {
    return new TodoDto({ id, title, text, completed });
  }
}
