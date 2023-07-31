"use server";

import ContactFormEmail from "@/lib/email/contact-form-email";
import { Resend } from "resend";
import { CreateEmailResponse } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("email");

  if (!senderEmail || typeof senderEmail !== "string") {
    return {
      error: "Invalid sender email",
    };
  }

  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sheriffsalman00@gmail.com",
      subject: "Message From Contact in New Portfolio",
      reply_to: senderEmail,
      // text: `Message From: ${senderEmail} Message: ${message}`,
      react: <ContactFormEmail message={message} senderEmail={senderEmail} />,
    });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: error.message,
      };
    }
    return error;
  }

  return {
    data: data,
  };
};
