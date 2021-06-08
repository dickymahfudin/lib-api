import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class Authentication {
  public static passwordHash = (password: string, salt: number): Promise<string> => {
    return bcrypt.hash(password, salt);
  };

  public static passwordCompare = async (text: string, encrypted: string): Promise<boolean> => {
    const result = await bcrypt.compare(text, encrypted);
    return result;
  };

  public static generateToken = async <T>(user: T): Promise<string> => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'dism';
    const expiresIn: string = process.env.JWT_EXPIRES || '1m';
    const token: string = jwt.sign({ user }, secretKey, { expiresIn });
    return token;
  };

  public static generateTokenRaspi = async <T>(user: T): Promise<string> => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'dism';
    const token: string = jwt.sign({ user }, secretKey);
    return token;
  };
}
