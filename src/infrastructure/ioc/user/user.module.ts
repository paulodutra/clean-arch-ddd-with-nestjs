import { Module } from '@nestjs/common';
import { UserController } from '../../../controllers/user/user.controller';
import { UserRepositoryInterface } from '../../../data/protocols/db/user/user-repository.interface';
import { DatabaseModule } from '../../../infrastructure/database/database.module';
import { MongodbUserRepository } from '../../../infrastructure/database/mongodb/repositories/user/mongodb-user-repository';
import { AddUserUseCase } from '../../../usecases/user/add-user/add-user.usecase';
import { LoadAllUsersUseCase } from '../../../usecases/user/load-all-users/load-all-users.usecase';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: AddUserUseCase,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new AddUserUseCase(userRepo);
      },
      inject: [MongodbUserRepository],
    },
    {
      provide: LoadAllUsersUseCase,
      useFactory: (userRepo: UserRepositoryInterface) => {
        return new LoadAllUsersUseCase(userRepo);
      },
      inject: [MongodbUserRepository],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
