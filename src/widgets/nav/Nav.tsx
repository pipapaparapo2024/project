import { FC } from "react";

import { useStore } from "./StoreNav";
import { NavType } from "./StoreNav";
import { NavStyle } from "./StoreNav";

export const Nav: FC = () => {
  const { setNavChoice } = useStore();

  return (
    <>
      <div className="mt-3 bg-gray-400 h-130 w-60 rounded-lg">
        <ul>
          <li className={NavStyle} onClick={() => setNavChoice(NavType.wardrobe)}>
            Wardrobe
          </li>
          <li className={NavStyle} onClick={() => setNavChoice(NavType.type)}>
            Type
          </li>
          <li className={NavStyle} onClick={() => setNavChoice(NavType.space)}>
            Space
          </li>
        </ul>
      </div>
    </>
  );
};
