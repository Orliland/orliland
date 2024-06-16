import { Inter } from "next/font/google";
import "./globals.css";

// LAYOUT COMPONENTS
import Header from "@/app/ui/Header";
import Footer from "@/app/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orliland, Front-end Developer",
  description: "Imagine, Draw, Code and Dream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} relative`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
