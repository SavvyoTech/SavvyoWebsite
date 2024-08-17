import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";

import ThemeWrapper from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savvyo",
  description: "Experience the next evolution in digital connectivity and commerce today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
