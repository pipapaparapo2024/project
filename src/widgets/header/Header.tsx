import { FC } from "react";
import { SearchCloth } from "../../features/SearchCloth/SearchCloth";

export const Header: FC = () => {
  return (
    <>
      <div className="mt-5 bg-gray-200 h-30 rounded-lg">
        <div>
          Здесь будет header <SearchCloth />
        </div>
      </div>
    </>
  );
};
