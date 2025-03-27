import { FC } from "react";

import { useStore } from "../../widgets/nav/StoreNav";
import { WeardropPage } from "../../pages/navPages/WeardropPage";
import { TypePage } from "../../pages/navPages/TypePage";
import { SpacePage } from "../../pages/navPages/SpacePage";

export const NavChoice: FC = () => {
  const { navChoice } = useStore();
  return (
    <>
      <div>
        <div>
          {navChoice === "wardrobe" && <WeardropPage />}
          {navChoice === "type" && <TypePage />}
          {navChoice === "space" && <SpacePage />}
        </div>
      </div>
    </>
  );
};
