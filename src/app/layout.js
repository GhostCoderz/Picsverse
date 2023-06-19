import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import favicon from "../components/logo.png";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PicsVerse",
  description: "All the pics at one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Head>
      <body className={inter.className}>{children}</body>
      <Script
        src="https://kit.fontawesome.com/dc7661438b.js"
        crossorigin="anonymous"
      ></Script>
    </html>
  );
}
