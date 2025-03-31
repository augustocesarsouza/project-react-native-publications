export interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  confirmEmail: number;
  userImage: string;
  base64ImageUser: string;
  token: string;
}