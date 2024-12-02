import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/sections/Header";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vishal Pawar - Full Stack Developer & Game Developer",
  description:
    "I'm a passionate full-stack developer with a strong interest in game development, focused on building immersive digital experiences and efficient web solutions. I work on both front-end and back-end development to create user-focused applications that blend technical expertise with creative ideas. My goal is to deliver seamless functionality and engaging user experiences in every project I take on.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
