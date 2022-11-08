interface IAuthResponse {
  accessToken: string;
  status: number;
  message: string;
}

interface IAuthUser {
  firstName: string;
  lastName: string;
  email: string;
}

export type { IAuthResponse, IAuthUser };
