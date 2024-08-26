import { Roboto, Montserrat } from "next/font/google";

export const roboto = Roboto({
  weight: ["100", "300"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const montserrat = Montserrat({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});
