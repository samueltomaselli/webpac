import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request, res: Response) {
  const { fullName, email, suggestion } = await req.json();

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "samueltomaselli2005@gmail.com",
      subject: fullName,
      html: `<p>Email: ${email}</p> </br>
            <p>Sugestão: ${suggestion}</p>`,
    });

    return NextResponse.json({ message: "Email enviado", data });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
