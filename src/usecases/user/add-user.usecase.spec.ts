import { UserRepositoryInterface } from '../../data/protocols/db/user/user-repository.interface';
import { AddUserUseCase } from './add-user.usecase';
import { User, UserProps } from '../../domain/user/user';

describe('AddUserUseCase', () => {
  let addUserUseCase: AddUserUseCase;
  let userRepositoryMock: jest.Mocked<UserRepositoryInterface>;

  beforeEach(() => {
    userRepositoryMock = {
      create: jest.fn(),
      find: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
    } as jest.Mocked<UserRepositoryInterface>;

    addUserUseCase = new AddUserUseCase(userRepositoryMock);
  });
  it('should be defined', () => {
    expect(addUserUseCase).toBeDefined();
  });
  it('should create a new user', async () => {
    const userProps: UserProps = {
      name: 'name',
      surname: 'surname',
      email: 'email@email.com',
      password: 'password',
    };
    const expectedUser = {
      ...userProps,
      _id: 'id',
      createdAt: new Date('2025-06-18T14:12:30.503Z'),
      updatedAt: new Date('2025-06-18T14:12:30.503Z'),
    };
    userRepositoryMock.create.mockResolvedValue(expectedUser);
    const user = User.create(userProps);
    const result = await addUserUseCase.create(user);
    expect(result).toEqual(expectedUser);
    expect(userRepositoryMock.create).toHaveBeenCalledTimes(1);
  });
});
