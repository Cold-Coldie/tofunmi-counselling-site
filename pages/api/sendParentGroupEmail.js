import nodeMailer from "nodemailer";

export default async function sendParentGroupEmail(req, res) {
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
      subject: "I WANT TO JOIN YOUR PARENTING GROUP FROM SITE!!!",
      text: `I am ${
        req.body.fullName
      }. \nI want to join your parenting group. \nAm I a parent? ${req.body.isParent.toString()}. \nI've been married or a single parent for how many years? ${
        req.body.howLong
      }. \nThis is my email right here: ${req.body.email}. \nMy gender is ${
        req.body.gender
      }. \nI contacted you through your website.`,
    });

    let response2 = "";
    response2 = await transporter.sendMail({
      to: req.body.email, // Recipient's email or domain
      from: process.env.NEXT_PUBLIC_PORTFOLIO_GMAIL_ID, // Use the email address or domain you verified above
      subject: "PARENTING GROUP REQUEST ACKNOWLEDGED",
      text: `Your request to join "Your Child's Psyche and You" parenting group has been recieved. \nClick the link below to join. \nhttps://chat.whatsapp.com/CRgLKH2lkfx8yawgSplxBb`,
    });

    return res.status(200).json({ response });
  } catch (error) {
    console.error(error);

    if (error) {
      return res.status(500).json({ error });
    }
  }
}
