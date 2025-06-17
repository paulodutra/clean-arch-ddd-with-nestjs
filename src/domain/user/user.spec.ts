import { UserProps, User } from './user';

describe('Domain User Tests', () => {
  it('should call constructor method', () => {
    let userProps: UserProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };
    let user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });
    userProps = {
      name: 'any_name',
      surname: 'any_surname',
      email: 'email_any@mail.com',
      password: 'password_any',
    };
    expect(user.id).toBeDefined();
    user = User.create(userProps);
    expect(user.props).toEqual({
      ...userProps,
    });
  });

  it('should call toJSON method', () => {
    const userProps: UserProps = {
      name: 'any name',
      surname: 'any surname',
      email: 'any@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    user.toJSON();
    expect(user.toJSON()).toStrictEqual({
      id: user.id,
      name: 'any name',
      surname: 'any surname',
      email: 'any@email.com',
      password: 'password',
    });
  });

  it('should call updateName method', () => {
    const userProps: UserProps = {
      name: 'any name',
      surname: 'any surname',
      email: 'any@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    const name = 'my name';
    user.updateName(name);
    expect(user.name).toBe(name);
  });
  it('should call updateSurname method', () => {
    const userProps: UserProps = {
      name: 'any name',
      surname: 'any surname',
      email: 'any@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    const surname = 'my surname';
    user.updateSurname(surname);
    expect(user.surname).toBe(surname);
  });

  it('should call updateEmail method', () => {
    const userProps: UserProps = {
      name: 'any name',
      surname: 'any surname',
      email: 'any@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    const email = 'myemail@email.com';
    user.updateEmail(email);
    expect(user.email).toBe(email);
  });

  it('should call updatePassword method', () => {
    const userProps: UserProps = {
      name: 'any name',
      surname: 'any surname',
      email: 'any@email.com',
      password: 'password',
    };
    const user = User.create(userProps);
    const password = 'mypassword';
    user.updatePassword(password);
    expect(user.password).toBe(password);
  });
});
