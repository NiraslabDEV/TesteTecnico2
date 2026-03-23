import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ETIC - Quality, Innovation & Professionalism",
  description:
    "Quality, Innovation, Professionalism, and global excellence in every build.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`scroll-smooth ${workSans.variable}`}>
      <body className={`antialiased ${workSans.className}`}>{children}</body>
    </html>
  );
}
