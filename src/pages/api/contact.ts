// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { type, name, email, phone, company, message } = req.body;

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 2525,
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // Your Gmail password or app-specific password
      }
    });

    // Prepare the email content
    const mailOptions = {
      from: "no-reply@zymptek.com",
      to: process.env.RECEIVING_EMAIL, // Your email address
      subject: `Contact Form Submission from ${name}`,
      text: `
        Type: ${type}
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Company: ${company}
        Messgae: ${message}
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email.', error });
    }
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed.' });
  }
}
