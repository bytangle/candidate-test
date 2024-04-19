import { Injectable } from '@nestjs/common';

const user = {
  email: 'joshua@vaurse.com',
  password: 'Qazwsx1122@',
};

const accessKey = '123456';

@Injectable()
export class AuthService {
  verify(email: string, password: string): string {
    const successful = email == user.email && password == user.password;

    return successful ? accessKey : null;
  }
}
