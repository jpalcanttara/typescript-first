interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachments?: string[];
}

interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IMailService {
  sendEmail(request: IMessageDTO): void;
}

class EmailServices implements IMailService {
  sendEmail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailServices;
