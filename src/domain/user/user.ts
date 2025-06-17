import { randomUUID } from 'crypto';

export type UserProps = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export class User {
  public readonly id: string;
  public props: Required<UserProps>;

  private constructor(props: UserProps, id?: string) {
    this.id = id || randomUUID();
    this.props = {
      ...props,
    };
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get name() {
    return this.props.name;
  }

  private set surname(value: string) {
    this.props.surname = value;
  }

  get surname() {
    return this.props.surname;
  }

  private set email(value: string) {
    this.props.email = value;
  }

  get email() {
    return this.props.email;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  get password() {
    return this.props.password;
  }

  static create(props: UserProps, id?: string): User {
    return new User(props, id);
  }

  updateName(name: string) {
    this.name = name;
  }

  updateSurname(surname: string) {
    this.surname = surname;
  }

  updateEmail(email: string) {
    this.email = email;
  }

  updatePassword(password: string) {
    this.password = password;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
