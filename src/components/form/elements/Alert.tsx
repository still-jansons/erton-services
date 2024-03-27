import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

export default function Alert({
  status,
  message,
}: {
  status: string | "success" | "error";
  message: string;
}) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending || message.length === 0 ? null : (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`${status === "success" ? "bg-logo-green" : "bg-rose-600/70"} font-heebo absolute mt-4 w-full rounded-md p-4 text-center font-bold text-white`}
          role="alert"
        >
          {message}
        </motion.div>
      )}
    </>
  );
}
