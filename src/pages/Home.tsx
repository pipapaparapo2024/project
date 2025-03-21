import { FC } from "react";

import { Header } from "../widgets/header/Header";
import { Footer } from "../widgets/footer/footer";
import { Nav } from "../widgets/nav/Nav";
import { Menu } from "../widgets/menu/Menu";

export const Home: FC = () => {
  return (
    <div className="mx-40">
      <Header />
      <div className="flex">
        <Nav/>
        <Menu/>
      </div>
      <Footer />
    </div>
  );
};
