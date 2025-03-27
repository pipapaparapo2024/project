import { FC } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useSearchStore } from "./SearchClothStore";
import { style } from "./SearchClothStore";
export const SearchCloth: FC = () => {
  const { searchText, setSearchText } = useSearchStore();

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter name.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <ClearIcon className={style} onClick={() => setSearchText("")} />
        <button type="submit"></button>
      </div>
    </>
  );
};
