import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { User, UserProps } from '../../domain/user/user';
import { AddUserUseCase } from '../../usecases/user/add-user/add-user.usecase';

describe('UserController', () => {
  let userController: UserController;
  let addUserUseCase: AddUserUseCase;
  const userProps: UserProps = {
    name: 'name',
    surname: 'surname',
    email: 'email@email.com',
    password: 'password',
  };
  const user = User.create(userProps);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: AddUserUseCase,
          useValue: {
            create: jest.fn().mockResolvedValue(user),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    addUserUseCase = module.get<AddUserUseCase>(AddUserUseCase);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
    expect(addUserUseCase).toBeDefined();
  });

  it('should create an user', async () => {
    await userController.create(userProps);
    expect(addUserUseCase.create).toHaveBeenCalledWith(userProps);
  });
});
