import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vishal Pawar - Full Stack Developer & Game Developer",
  description:
    "I'm a dedicated full-stack developer with a strong foundation in Next.js, TypeScript, three.js, CSS, MongoDB, and a passion for game development. I enjoy creating interactive, visually compelling applications and games that emphasize user-friendly design and responsiveness. With experience across both front-end and back-end technologies, I focus on building seamless, efficient solutions that bring ideas to life across the full stack. As I continue expanding my skills, I prioritize simplicity and clarity, especially when leveraging JavaScript for dynamic applications and engaging game experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
