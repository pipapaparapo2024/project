import { FC } from "react";
import { LayoutProps } from "./LayoutStore";
import { Header } from "../../widgets/header/Header";
import { Footer } from "../../widgets/footer/footer";
import { NavChoice } from "../../features/navChoice/NavChoice";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex">
          <NavChoice/>
          {children}
      </div>
      <Footer />
    </>
  );
};
