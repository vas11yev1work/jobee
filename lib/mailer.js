const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    direct: true,
    host: 'smtp.mail.ru',
    port: 465,
    auth: {
        user: 'noreply@prokat-control.bizml.ru',
        pass: 'password'
    },
    secure: true
});

const sendMail = function (from, to, subject, text) {
    return new Promise(async function (resolve, reject) {
        const mailOptions = {
            from: 'noreply@prokat-control.bizml.ru', //
            to: to,
            subject: subject,
            text: text
        };
        transporter.sendMail(mailOptions, function (err, html) {
            if (err) {
                return reject(err);
            }
            resolve(1);
        });
    });
}

module.exports.transporter = transporter;
module.exports.sendMail = sendMail;
