import type { Metadata } from "next";
import { Great_Vibes, Lora } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  style: "normal",
  variable: "--font-great-vibes-regular",
  subsets: ["latin"],
});

const lora = Lora({
  weight: "400",
  style: "normal",
  variable: "--font-lora-regular",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevHouse",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${greatVibes.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
