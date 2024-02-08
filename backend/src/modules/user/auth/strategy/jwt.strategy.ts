import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { RequestInterface } from 'src/core/interfaces';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly authService: AuthService,
    private config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWTKEY'),
      passReqToCallback: true,
    });
  }

  async validate(request: RequestInterface, payload: any) {
    let user = await this.authService.getUser(payload);

    if (!user) throw new UnauthorizedException('Unauthorized user');
    request;

    return user;
  }
}
