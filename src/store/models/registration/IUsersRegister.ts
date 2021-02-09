export interface IUsersRegister {
  users: IUser[];
  isSubmitted: boolean;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  address: string;
  dateOfRegistration: Date;
}
