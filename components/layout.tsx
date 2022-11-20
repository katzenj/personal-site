import { Header } from "./header";
import { Footer } from "./footer";
import { Meta } from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

export const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
