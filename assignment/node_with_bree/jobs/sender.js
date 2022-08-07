const nodemailer = require('nodemailer')

async function main() {
    let transporter = nodemailer.createTransport({
        service: "outlook",
        port: 587,
        secure: false,
        auth: {
            user: "adityakumarroy001@outlook.com",
            pass: "Adi@8877",

        },
    });

    await transporter.sendMail({
        from: 'Adityakumarroy001@outlook.com',
        to: "simlidgp2000@gmail.com",
        subject: "Notice",
        html: "<b>Do Not Reply to this mail. This is a scheduled email by Node.js and only for testing purpose. <b><br><br><b>*****************  Hello World  *****************<b>",
    });
}

main().catch(err => console.log(err))