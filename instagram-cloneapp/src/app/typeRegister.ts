export interface IRegister {
    id: number;
    email: string;
    name: string;
    username : string;
    pasword: string;
  }

  export interface IUser {
    username : string;
    email : string;
  }

  export interface IInstagram {
    imageUrl: string;
    caption: string;
    Iuser: IUser;
  }