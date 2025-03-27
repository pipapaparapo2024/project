import { FC } from "react";

import { Menu } from "../widgets/menu/Menu";
import { Layout } from "../shared/assets/Layout";

export const HomePage: FC = () => {
  return (
    <div className="mx-40">
      <Layout><Menu/></Layout>
    </div>
  );
};
