import { Injectable } from '@nestjs/common';

const user = {
  email: 'you@cool.com',
  password: '2azw2x1212@',
};

const accessKey = '123456';

@Injectable()
export class AuthService {
  /**
   * @description verify user credentials. null return value implies that credential is incorrect, and vice versa
   * @param email the user email
   * @param password the user password
   * @returns
   */
  verify(email: string, password: string): string {
    const successful = email == user.email && password == user.password;

    return successful ? accessKey : null;
  }
}
