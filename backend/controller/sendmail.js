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
    const { email, text, subject } = req.body;  
    console.log(text)
    try {
        const info = await transporter.sendMail({
            from: `"Transport Manager" <${process.env.EMAIL}>`,
            to: email,           
            subject: subject,    
            text: text,           
        });

        console.log("Message sent: ", info.messageId);

        res.json({
            success: true,
            message: "Mail sent successfully",
            info,
        });

    } catch (err) {
        console.error("Error while sending mail:", err);
        res.status(500).json({
            success: false,
            message: "Failed to send mail",
            error: err
        });
    }
};

export default sendgMail;
