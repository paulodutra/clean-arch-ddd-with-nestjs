import { InjectModel } from '@nestjs/mongoose';
import { UserRepositoryInterface } from 'src/data/protocols/db/user/user-repository.interface';
import { UserModel } from '../../models/user/user.model';
import { Model } from 'mongoose';
import { User } from 'src/domain/user/user';

export class MongodbUserRepository implements UserRepositoryInterface {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userCollection: Model<UserModel>,
  ) {}

  async create(data: User): Promise<UserModel> {
    return await this.userCollection.create(data);
  }

  async find(): Promise<UserModel[]> {
    return await this.userCollection.find({}, { __v: false });
  }

  async findById(id: string): Promise<UserModel> {
    return (await this.userCollection.findOne({
      __id: { $eq: id },
    })) as UserModel;
  }

  async update(id: string, data: User): Promise<UserModel> {
    return (await this.userCollection.findOneAndUpdate({
      __id: { $eq: id },
      $set: data,
      new: true,
    })) as UserModel;
  }

  async remove(id: string): Promise<void> {
    await this.userCollection.deleteOne({ _id: { $eq: id } });
  }
}
