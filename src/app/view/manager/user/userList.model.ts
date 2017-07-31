export class SettingsModel {
  public firstname:string;
  public lastname:string;
  public username:string;
  public email:string;
  public role:string[];


  constructor(firstname: string, lastname: string, username: string,email: string, role: string[]) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.role = role;
  }
}

