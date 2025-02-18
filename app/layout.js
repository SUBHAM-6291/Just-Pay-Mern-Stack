import { Inter, Roboto_Mono } from "next/font/google"; // Geist font is not available
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JUST PAY",
  description: "Say goodbye to payment stress. JUST PAY and move on!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <SessionWrapper>
          <Navbar />
          <div className="h-screen w-full text-white">
            <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            {children} {/* Children will be the actual page content */}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
