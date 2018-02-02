export class Driver {
  public firstName:string;
  public lastName:string;

  constructor(firstName: string,
              lastName: string,
              id?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
