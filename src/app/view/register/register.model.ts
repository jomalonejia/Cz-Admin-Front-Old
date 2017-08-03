export class RegisterModel {
  private _firstName:string;
  private _lastName:string;
  private _username:string;
  private _email:string;
  private _password:string;


  constructor(firstName: string, lastName: string, username: string,email: string,password:string ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._username = username;
    this._email = email;
    this._password = password;
  }


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
}
