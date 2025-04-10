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
    avatar:string;
  }

  export interface IPost {
    id:number;
    imageUrl: string;
    caption: string;
    createdAt: string
    user: IUser;
    liked: boolean;
    likeCount: number;
  }