import { useFormStatus } from "react-dom";

export default function SubmitButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn-primary w-full self-end disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none md:w-auto"
      disabled={disabled || pending}
    >
      {pending ? "Skickar..." : "Skicka"}
    </button>
  );
}
