"use client";

import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { submitContact } from "@/actions";
import SubmitButton from "@/components/form/elements/SubmitButton";
import Alert from "@/components/form/elements/Alert";

export default function ContactForm() {
  let initialState = {
    message: "",
    status: "",
  };

  const [state, formAction] = useFormState(submitContact, initialState);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const surnameRegex = /^[a-zA-Z]+$/;

    setValid(
      emailRegex.test(email) &&
        nameRegex.test(name) &&
        surnameRegex.test(surname),
    );
  }, [email, name, surname]);

  return (
    <form action={formAction} className="relative">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-6">
          <input
            required
            name="name"
            type="text"
            placeholder="Förnamn"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            name="surname"
            type="text"
            placeholder="Efternamn"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
        <input
          required
          name="email"
          type="email"
          placeholder="E-post"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea name="message" placeholder="Meddelande" rows={5}></textarea>
        <SubmitButton disabled={!valid || state.status === "success"} />
      </div>
      <Alert status={state.status} message={state.message} />
    </form>
  );
}
