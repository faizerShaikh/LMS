// "use client";

import { Inter } from "next/font/google";
import Providers from "../app/Providers";
import "../styles/globals.css";
import { SideNav } from "components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="LMS">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
