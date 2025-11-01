// app.js
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { Email } from './Email';
const transporter = nodemailer.createTransport({
host: 'smtp.forwardemail.net',
port: 465,
secure: true,
auth: {
// TODO: replace user and pass values from:
// <https://forwardemail.net/guides/send-email-with-custom-domain-smtp>
user: 'you@example.com',
pass: '****************************'
},
});
const html = render(Email({ url: "https://example.com" }));
const options = {
from: 'you@example.com',
to: 'mp5372202@gmail.com',
subject: 'hello world',
html
};
transporter.sendMail(options);