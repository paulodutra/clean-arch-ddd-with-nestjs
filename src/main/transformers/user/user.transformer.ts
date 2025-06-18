import { UserModel } from 'src/infrastructure/database/mongodb/models/user/user.model';

export class UserTranstormer {
  static toUser(user: UserModel) {
    return {
      id: user._id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  static toUsers(users: UserModel[]) {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    return users.map(this.toUser);
  }
}