"use server";
import { Resend } from "resend";

interface State {
  error: string | null
  success: boolean
}

// Fonction asynchrone qui renvoie la valeur de runtime
export async function getRuntime(): Promise<string> {
  return 'edge';
}

// Fonction asynchrone qui renvoie la valeur de dynamic
export async function getDynamic(): Promise<string> {
  return 'force-dynamic';
}

export async function sendEmail(prevState: State, formData: FormData) {
  const email = formData.get("email") as string
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Sandamal Website <onboarding@resend.dev>',
      to: 'perez.julien.sandamal@gmail.com',
      subject: `Nouvelle inscription depuis ${email}`,
      text:  `Nouvelle inscription depuis ${email}`
    })
    return {
      error: null,
      success: true
    }
  } catch (error) {
    console.log(error)
    return {
      error: (error as Error).message,
      success: false
    }
  }
}
