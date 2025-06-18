import { UserRepositoryInterface } from 'src/data/protocols/db/user/user-repository.interface';
import { User } from '../../../domain/user/user';
import { UserTranstormer } from '../../../main/transformers/user/user.transformer';

export class AddUserUseCase {
  constructor(private readonly userRepo: UserRepositoryInterface) {}

  async create(user: User) {
    const result = await this.userRepo.create(user);
    return UserTranstormer.toUser(result);
  }
}
