// {
//     "username": "kvwv5z-8pZ7MoU+DI",
//     "email": "user@example.com",
//     "password": "string"
//   }
export interface FormValues {
  username: string;
  email: string;
  password: string;
  checkbox: boolean;
}

export interface SignupFormData {
  username: string;
  email: string;
  password: string;
}

export interface ForgetPasswordData {
  email: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  email: string;
  username: string;
  access: string;
  refresh: string;
}

export interface RefreshTokenData {
  refresh: string;
}

export interface RefreshTokenResponse {
  access: string;
  refresh: string;
}
