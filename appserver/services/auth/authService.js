import nodemailer from "nodemailer";
import pug from "pug";
import { convert } from "html-to-text";
import dotenv from "dotenv";
dotenv.config();

const HOST = process.env.HOST;
const PORT_SMTP = process.env.PORT_SMTP;
const USER = process.env.USER;
const PASS = process.env.PASS;
const EMAIL_FROM = process.env.EMAIL_FROM;

class AuthService {
  static createVerificationEmail(
    firstName,
    lastName,
    email,
    url,
    template,
    subject
  ) {
    const smtp = {
      host: HOST,
      port: PORT_SMTP,
      secure: false,
      auth: {
        user: USER,
        pass: PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    };

    const html = pug.renderFile(`./templates/${template}.pug`, {
      firstName: firstName,
      lastName: lastName,
      subject: subject,
      url: url,
    });

    const newTransport = () => {
      return nodemailer.createTransport({
        ...smtp,
      });
    };

    const mailOptions = {
      from: EMAIL_FROM,
      to: email,
      subject,
      text: convert(html),
      html,
    };

    newTransport().sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been sent: " + info.response);
      }
    });
  }

  static async sendVerificationEmail(firstName, lastName, email, url) {
    this.createVerificationEmail(
      firstName,
      lastName,
      email,
      url,
      "verificationCode",
      "Console account verification code"
    );
  }

  static async sendForgotPasswordEmail(firstName, lastName, email, url) {
    this.createVerificationEmail(
      firstName,
      lastName,
      email,
      url,
      "forgotPassword",
      "Console password reset"
    );
  }
}

export default AuthService;
