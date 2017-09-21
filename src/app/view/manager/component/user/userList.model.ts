export class SettingsModel {
  public firstName:string;
  public lastName:string;
  public username:string;
  public email:string;
  public role:string[];


  constructor(firstName: string, lastName: string, username: string,email: string, role: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.role = role;
  }
}

