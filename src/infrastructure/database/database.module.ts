import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb/mongodb.module';
import { MongodbUserRepository } from './mongodb/repositories/user/mongodb-user-repository';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './mongodb/models/user/user.model';

@Module({
  imports: [
    MongodbModule,
    MongooseModule.forFeature([
      {
        name: UserModel.name,
        schema: UserSchema,
      },
    ]),
  ],
  providers: [MongodbUserRepository],
  exports: [MongodbUserRepository, MongodbModule],
})
export class DatabaseModule {}
