import { FC } from "react";

interface PostClothBody {
  cloth: any;
}
export const Cart: FC<PostClothBody> = ({ cloth }) => {
  return (
    <>
        <div className="border-1 border-black grid grid-cols-5 ">
          <img src={cloth.photoUrl}/>
          <span>{cloth.name}</span>
          <span>{cloth.size}</span>
          <span>{cloth.type}</span>
          <span>{cloth.place}</span>
        </div>
    </>
  );
};
