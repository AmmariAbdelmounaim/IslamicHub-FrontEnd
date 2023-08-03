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
  role: string;
}
