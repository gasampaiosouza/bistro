import { Request, Response } from 'express';
import { Logins } from '../database/entity/Logins';

class LoginsController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const logins = new Logins();

    logins.email = email;
    logins.password = password;

    try {
      await logins.save();

      return res.status(200).json(logins);
    } catch (err) {
      return res.status(404).json({ RERO: true });
    }
  }
}

export default new LoginsController();
