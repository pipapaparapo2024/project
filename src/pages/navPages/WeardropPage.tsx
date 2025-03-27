import { FC } from "react";

import { Card } from "../../entities/Card";
import { useStore } from "../../widgets/nav/StoreNav";
import { useSearchStore } from "../../features/SearchCloth/SearchClothStore";

export const WeardropPage: FC = () => {
  const { clothes } = useStore();
  const { searchText } = useSearchStore();
  const searchClothes = clothes.filter((cloth) =>
    cloth.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      <div>
        {searchClothes.map((cloth) => (
          <Card cloth={cloth} />
        ))}
      </div>
    </>
  );
};
