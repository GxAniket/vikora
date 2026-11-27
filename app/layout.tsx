
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Вікора | My Little Space",
  description:
    "Everything about me and my life — Все про мене і моє життя.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
