import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config();
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});
const sendgMail = async (req, res) => {
    // console.log(process.env.EMAIL);
    // console.log(process.env.PASSWORD);
    try {
        const info = await transporter.sendMail({
            from: `"Transport Manager" <${process.env.EMAIL}>`, 
            to: "karanyadav21398@gmail.com", 
            subject: "Hello", 
            text: "Hello world?"
        });
        res.json({ message: "Mail sent", info });
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
        console.error("Error while sending mail", err);
        res.json(err);
    }
    // res.send("mail sent");
}

export default sendgMail;