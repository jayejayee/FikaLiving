"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const { error } = await supabase.from("Inquiries").insert({
      Name: formData.get("name"),
      Email: formData.get("email"),
      Description: formData.get("message"),
    });

    setIsSubmitting(false);

    if (error) {
      setStatus("Something went wrong. Please try again.");
      console.error(error);
      return;
    }

    form.reset();
    setStatus("Thanks. Your note has been sent.");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Your name<input id="name" name="name" type="text" placeholder="Jane Smith" required /></label>
      <label htmlFor="email">Email address<input id="email" name="email" type="email" placeholder="jane@example.com" required /></label>
      <label htmlFor="message">Tell us about the project<textarea id="message" name="message" rows={4} placeholder="A dining table for six, a tricky corner, a dream..." required /></label>
      <button className="button button-blue" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send the note"} <span aria-hidden="true">↗</span></button>
      <p role="status" aria-live="polite">{status}</p>
    </form>
  );
}
