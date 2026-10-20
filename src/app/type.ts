interface IUserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface IUserResponse {
    userData : IUserData
    token : string
}