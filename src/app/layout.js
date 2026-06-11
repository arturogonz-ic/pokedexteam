import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "../navbar/components/Navbar";
import { SpritePreferenceProvider } from "../pokemon/contexts/SpritePreferenceContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "PokeAPP Teams",
  description: "Crea y gestiona tus equipos Pokémon",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col"><SpritePreferenceProvider><Navbar /><div className="pt-4">{children}</div></SpritePreferenceProvider></body>
    </html>
  );
}
