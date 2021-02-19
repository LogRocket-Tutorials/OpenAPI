import { Repository } from "typeorm";

export type MockType<T> = {
  [P in keyof T]: jest.Mock<any>;
};

export const repositoryMockFactory: <T>() => MockType<Repository<T>> = jest.fn(() =>({
  manager: jest.fn(),
  metadata: jest.fn(),
  queryRunner: jest.fn(),
  createQueryBuilder: jest.fn(),
  target: jest.fn(),
  hasId: jest.fn(),
  getId: jest.fn(),
  create: jest.fn(),
  merge: jest.fn(),
  preload: jest.fn(),
  save: jest.fn(),
  remove: jest.fn(),
  softRemove: jest.fn(),
  recover: jest.fn(),
  insert: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
  softDelete: jest.fn(),
  restore: jest.fn(),
  count: jest.fn(),
  find: jest.fn(),
  findAndCount: jest.fn(),
  findByIds: jest.fn(),
  findOne: jest.fn(),
  findOneOrFail: jest.fn(),
  query: jest.fn(),
  clear: jest.fn(),
  increment: jest.fn(),
  decrement: jest.fn()
}));

