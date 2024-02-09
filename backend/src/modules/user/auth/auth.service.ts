import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../users/models/user.model';
import {
  ChangePasswordDTO,
  ForgetPasswordDTO,
  LoginUserDTO,
  VerifyOTP,
} from './dtos';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { bcrypt } from 'src/core/helpers';
import { MailsService } from 'src/common/modules';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private user: typeof User,
    private readonly jwtService: JwtService,
    private readonly mailsService: MailsService,
  ) {}

  async login(loginUser: LoginUserDTO): Promise<{ user: User; token: string }> {
    const data = await this.user.findOne({
      where: {
        email: loginUser.email,
      },
    });
    let user = data || null;

    if (!user) throw new UnauthorizedException();

    if (!(await bcrypt.compare(user.password, loginUser.password)))
      throw new UnauthorizedException();

    const jwt = await this.jwtService.signAsync({
      id: user.id,
    });
    user.password = undefined;
    return { user, token: jwt };
  }

  async getForgetPasswordOTP(data: ForgetPasswordDTO) {
    const user = await this.user.findOne({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new NotFoundException("Can't find user with this email!");

    let otp = Math.floor(100000 + Math.random() * 900000);

    this.mailsService.SendOTP({
      to: user.email,
      subject: 'Reset Your Password - One-Time Password (OTP) Verification',
      context: {
        email: user.email,
        otp,
        name: user.name,
      },
    });

    const jwtToken = await this.jwtService.signAsync({
      otp,
      createdAt: new Date(),
    });

    return { otp: jwtToken };
  }

  async verifyOTP(data: VerifyOTP) {
    const user = await this.user.findOne({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new NotFoundException("Can't find user with this email!");

    const token: any = await this.jwtService.decode(data.token);

    const otpGenerationDate: any = new Date(token.createdAt);

    const currentDate: any = new Date();

    const timeDifference: any = currentDate - otpGenerationDate;

    if (timeDifference / 60000 > 10) {
      return { valid: false };
    } else {
      if (+data.otp === token.otp) {
        return { valid: true };
      } else {
        return { valid: false };
      }
    }
  }

  async changePassword(data: ChangePasswordDTO) {
    const user = await this.user.findOne({
      where: {
        email: data.email,
      },
    });

    if (!user) throw new NotFoundException("Can't find user with this email!");

    let password = await bcrypt.createHash(data.password);

    await this.user.update(
      {
        password,
      },
      { where: { email: data.email } },
    );

    return user;
  }

  async getUser(payload: any) {
    const user = await this.user.findOne({
      where: {
        id: payload.id,
      },
      attributes: {
        exclude: ['password'],
      },
    });
    return user;
  }
}
