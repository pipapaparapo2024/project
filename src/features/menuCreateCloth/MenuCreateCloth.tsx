import { FC, useEffect } from "react";

import { useStore } from "../../widgets/nav/StoreNav";
import { ModalWindowCreateCloth } from "../createCloth/ModalWindowCreateCloth";

export const MenuCreateCloth: FC = () => {
  const { getClothes } = useStore();

  useEffect(() => {
    getClothes();
  }, []);

  return (
    <>
      <div className="mx-10 my-5">
          <ModalWindowCreateCloth />
      </div>
    </>
  );
};
