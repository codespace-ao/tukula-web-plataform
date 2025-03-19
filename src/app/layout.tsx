import type { Metadata } from "next";
import { Montserrat, Open_Sans, Merienda } from "next/font/google";
import "@/styles/globals.css";

const montserrat = Montserrat({
  variable: "--font-primary",
  subsets: ["latin"],
});

const merienda = Merienda({
    variable: "--font-focus",
    subsets: ["latin"],
  });
  
const openSans = Open_Sans({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tukula",
  description: "Reduzindo o desperdício de alimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${merienda.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
