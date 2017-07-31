export class SettingsModel {
  public firstname:string;
  public lastname:string;
  public username:string;
  public password:string;
  public email:string;


  constructor(firstname: string, lastname: string, username: string, password: string, email: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
