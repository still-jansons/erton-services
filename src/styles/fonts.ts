import { Arimo, Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heebo",
});

const arimo = Arimo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arimo",
});

export { heebo, arimo };
