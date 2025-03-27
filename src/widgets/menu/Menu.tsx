import { FC, useEffect } from "react";

import { useStore } from "../nav/StoreNav";
import { NavChoice } from "../../features/navChoice/NavChoice";
import { CreateCloth } from "../../features/createCloth/CreateCloth";
import { ButtonCreate } from "../../features/createCloth/ButtonCreate";

export const Menu: FC = () => {
  const { getClothes, modalWindow } = useStore();

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <>
      <div className="mx-10 my-5">
        <NavChoice />
        {modalWindow ? (
          <CreateCloth />
        ) : (
          <ButtonCreate text="Create new cloth" />
        )}
      </div>
    </>
  );
};
