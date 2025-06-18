/* eslint-disable @typescript-eslint/unbound-method */
import { Model } from 'mongoose';
import { MongodbUserRepository } from './mongodb-user-repository';
import { UserModel } from '../../models/user/user.model';
import { User, UserProps } from '../../../../../domain/user/user';

const userModelMock = {
  create: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  findById: jest.fn(),
  findOneAndUpdate: jest.fn(),
  deleteOne: jest.fn(),
} as unknown as Model<UserModel>;
describe('MongodbUserRepository Unit Test', () => {
  let mongodbUserRepository: MongodbUserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mongodbUserRepository = new MongodbUserRepository(userModelMock);
  });

  it('should be defined', () => {
    expect(mongodbUserRepository).toBeDefined();
  });

  it('should create an user', async () => {
    const userProps: UserProps = {
      name: 'name',
      surname: 'surname',
      email: 'email@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    await mongodbUserRepository.create(user);
    expect(userModelMock.create).toHaveBeenCalledWith(user);
  });

  it('should return an array of users', async () => {
    const userProps: UserProps = {
      name: 'name',
      surname: 'surname',
      email: 'email@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    await mongodbUserRepository.create(user);
    await mongodbUserRepository.find();
    expect(userModelMock.create).toHaveBeenCalledWith(user);
    expect(userModelMock.find).toHaveBeenCalledTimes(1);
  });

  it('should find an user by id', async () => {
    const userProps: UserProps = {
      name: 'name',
      surname: 'surname',
      email: 'email@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    await mongodbUserRepository.create(user);
    const id = 'id';
    await mongodbUserRepository.findById(id);
    expect(userModelMock.findOne).toHaveBeenCalledTimes(1);
  });

  it('should update an user by id', async () => {
    const userProps: UserProps = {
      name: 'name',
      surname: 'surname',
      email: 'email@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    await mongodbUserRepository.create(user);
    await mongodbUserRepository.update(user.id, user);
    expect(userModelMock.findOneAndUpdate).toHaveBeenCalledTimes(1);
  });

  it('should remove an user by id', async () => {
    const userProps: UserProps = {
      name: 'name',
      surname: 'surname',
      email: 'email@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    await mongodbUserRepository.create(user);
    await mongodbUserRepository.remove(user.id);
    expect(userModelMock.deleteOne).toHaveBeenCalledTimes(1);
  });
});
