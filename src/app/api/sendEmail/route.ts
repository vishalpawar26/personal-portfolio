import nodemailer from "nodemailer";

export async function POST(request: Request) {
  console.log("asdfadfafadfsdaf", request.method);
  if (request.method === "POST") {
    console.log(
      "HEHHEHHEHHEEHHEHEEE",
      process.env.EMAIL,
      process.env.APP_PASSWORD,
    );

    const { fullName, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.EMAIL,
        subject: `Contact Form Submission: ${subject}`,
        text: `You have a new message from ${fullName} (${email}):\n\n${message}`,
      });

      return Response.json(
        { message: "Email sent successfully" },
        { status: 200 },
      );
    } catch (error) {
      console.log(error);
      return Response.json({ message: "Error sending email" }, { status: 500 });
    }
  } else {
    return Response.json({ message: "Method Not Allowed" }, { status: 405 });
  }
}
