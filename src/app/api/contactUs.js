import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, phoneNumber, email, message, jobTitle } = req.body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your preferred email service
      auth: {
        user: process.env.EMAIL, // Set your email environment variable
        pass: process.env.EMAIL_PASSWORD, // Set your email password environment variable
      },
    });

    const mailOptions = {
      from: process.env.EMAIL, // Your email
      to: process.env.EMAIL, // Recipient email (where the message will be sent)
      subject: "New Contact Form Submission",
      text: `
        You have a new contact form submission.

        Name: ${firstName} ${lastName}
        Phone: ${phoneNumber}
        Email: ${email}
        ${jobTitle ? `Job Title: ${jobTitle}\n` : ""}
        Message:
        ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ success: false, message: "Failed to send email." });
    }
  } else {
    res.status(405).json({ success: false, message: "Method Not Allowed" });
  }
}
