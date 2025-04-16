import { FC } from "react";

import { Card } from "../../../entities/Card";
import { useStore } from "../StoreNav";
import { useSearchStore } from "../../../features/SearchCloth/SearchClothStore";
import  {MenuCreateCloth } from "../../../features/menuCreateCloth/MenuCreateCloth";
import {SearchCloth} from '../../../features/SearchCloth/SearchCloth'

export const Weardrop: FC = () => {
  const { clothes } = useStore();
  const { searchText } = useSearchStore();
  const searchClothes = clothes.filter((cloth) =>
    cloth.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      <div className="m-3">
        <SearchCloth />
        {searchClothes.map((cloth) => (
          <Card cloth={cloth} />
        ))}
        <MenuCreateCloth/>
      </div>
    </>
  );
};