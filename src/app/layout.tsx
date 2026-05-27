import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Хусаиния — духовная образовательная организация",
  description: "Образовательный исламский центр. Курсы Корана, арабского языка, лекции, встречи и духовное развитие.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
