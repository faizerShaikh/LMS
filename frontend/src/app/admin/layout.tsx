'use client';
import { SideNav } from "components/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SideNav>
      {children}
    </SideNav>
  );
}
