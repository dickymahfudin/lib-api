import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

type TypeUser = { id: number; name: string; email: string; no_hp: string; created_at: Date; update_at: Date };

export class Authentication {
  public static passwordHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };

  public static passwordCompare = async (text: string, encrypted: string): Promise<boolean> => {
    const result = await bcrypt.compare(text, encrypted);
    return result;
  };

  public static generateToken = async (user: TypeUser): Promise<string> => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'dism';
    const expiresIn: string = process.env.JWT_EXPIRES || '1m';
    const token: string = jwt.sign({ user }, secretKey, { expiresIn });
    return token;
  };
}
