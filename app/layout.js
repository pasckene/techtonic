import {Sora} from "next/font/google";
import React from "react";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata = {
  title: "TechTonic",
  keywords: "TechTonic, Technology, News, Articles, Blog",
  authors: [{ name: "TechTonic Team", url: "https://techttonic.com" }],
  creator: "TechTonic Team",
  description: "Your one touch blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata?.title}</title>
        <meta name="description" content={metadata?.description} />   
      </head>

      <body
        className={`${sora?.className} antialiased bg-gradient-to-b from-[#050611] to-[#04000c]  relative`}
      >
        {children}
      </body>
    </html>
  );
}
