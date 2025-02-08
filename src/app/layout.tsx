import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Troy Bedingfield",
  description: "Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async type='text/javascript' src='/react-troybedingfield/hash-router-redirect.js'></script>
      </head>
      <body className={inter.className}>
        <div id="modal"></div>
        <Header />
        <div className="content-container">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
