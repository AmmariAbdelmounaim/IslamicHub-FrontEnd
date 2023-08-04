export interface User {
  id: number;
  firstname: string;
  lastname?: string;
  email: string;
  password: string;
  country: string;
  address: string;
  phoneNumber: string;
  token: string;
  centerDTO: Center;
  role: string;
}
export interface Center {
  id: number;
  name: string;
  address: string;
  ownerId: number;
  description: string;
}
