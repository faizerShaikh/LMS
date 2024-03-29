'use client';
import { Footer, Navbar } from "components/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<>
    <Navbar />
    {children}
    <Footer />
  </>
  );
}
