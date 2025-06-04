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
        <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMt23cez/3paNdF+e4x5l5d1z5b5a5b5a5b5a5b" crossOrigin="anonymous" />
      </head>

      <body
        className={`${sora?.className} antialiased bg-gradient-to-b from-[#050611] to-[#04000c]  relative text-white`}
      >
        {children}
      </body>
    </html>
  );
}
