import { FC } from "react";
import { Cloth } from "../widgets/nav/StoreNav";

export interface CardProps {
  cloth: Cloth;
}

export const Card: FC<CardProps> = ({ cloth }) => {
  return (
    <>
        <div className="border-1 p-1 mb-1 border-black grid grid-cols-3 rounded-lg">
          <div> 
            <img src={cloth.photoUrl}/>
              <div>
                <span>{cloth.name}</span>
                <span>{cloth.size}</span>
                <span>{cloth.type}</span>
                <span>{cloth.place}</span>
              </div>
          </div> 
        </div>
    </>
  );
};
