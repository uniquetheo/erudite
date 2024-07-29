import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const mont_alte = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Erudite Challenge App",
  description: "Built by Uniik",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mont_alte.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
