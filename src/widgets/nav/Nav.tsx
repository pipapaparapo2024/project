import { FC } from "react";
import { Link } from "react-router-dom";

import { useStore } from "../../services/store";
import {NavType} from "../../services/store";

export const Nav: FC = () => {
  const {setNavChoice}=useStore()

  const setChoice=(value:NavType)=>{
    setNavChoice(value)
  }
  return (
    <>
      <div className="bg-gray-400 h-150 w-50">
          <ul>
            <li className="p-2 text-lg cursor-pointer" onClick={()=>setChoice(NavType.wardrobe)}>Wardrobe</li>
            <li className="p-2 text-lg cursor-pointer" onClick={()=>setChoice(NavType.type)}>Type</li>
            <li className="p-2 text-lg cursor-pointer" onClick={()=>setChoice(NavType.space)}>Space</li>
          </ul>
          <Link to={"/login"}>назад</Link>
      </div>
    </>
  );
};

