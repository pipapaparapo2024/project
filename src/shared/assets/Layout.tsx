import { FC } from "react";
import { LayoutProps } from "./LayoutStore";
import { Header } from "../../widgets/header/Header";
import { Footer } from "../../widgets/footer/Footer";
import { Nav } from "../../widgets/nav/Nav";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
          <Nav/>
          {children}
      </div>
      <Footer />
    </>
  );
};
