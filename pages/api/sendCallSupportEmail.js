import nodeMailer from "nodemailer";

export default async function sendCallSupportEmail(req, res) {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_PORTFOLIO_GMAIL_ID,
      pass: process.env.NEXT_PUBLIC_PORTFOLIO_GMAIL_PASSWORD,
    },
  });

  try {
    let response = "";
    response = await transporter.sendMail({
      to: process.env.NEXT_PUBLIC_PORTFOLIO_GMAIL_ID, // Recipient's email or domain
      from: process.env.NEXT_PUBLIC_PORTFOLIO_GMAIL_ID, // Use the email address or domain you verified above
      subject: "CALL FOR SUPPORT FROM YOUR SITE!!!",
      text: `CALL FOR SUPPORT FROM YOUR SITE!!!. \nI am ${req.body.fullName}. \nThe reason for contacting you is this: ${req.body.reason}. \nThis is my email right here: ${req.body.email}. \nMy gender is ${req.body.gender}. \nI contacted you through your website.`,
    });
    return res.status(200).json({ response });
  } catch (error) {
    console.error(error);

    if (error) {
      return res.status(500).json({ error });
    }
  }
}
