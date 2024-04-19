import { Navbar } from "components/layout/navbar/index";
import { Footer } from "components/layout/footer/index";
import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const values = cookies().get("userData");
  return (
    <>
      <Navbar values={values} />
      <div className="pt-28">{children}</div>
      <Footer />
    </>
  );
}
