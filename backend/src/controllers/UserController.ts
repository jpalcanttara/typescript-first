import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [{ name: "Jon", email: "jon@jon" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: users[0],
      message: {
        subject: "Ben vindo!",
        body: "Seja Bem vindo ao sistema!",
      },
    });

    res.send();
  },
};
