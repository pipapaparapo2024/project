import { FC } from "react";
import {useStore} from '../../widgets/nav/StoreNav' 

interface ButtonCreateProps {
    text: string;
  }
  
export const ButtonCreate: FC<ButtonCreateProps> = ({text}) => {
    const{setModalWindow}=useStore()
  return (
    <>
      <button
        type="button"
        className="px-5 py-2 m-5 font-medium cursor-pointer border border-solid border-black rounded-lg hover:scale-110 transition duration-300 ease-in-out"
        onClick={() => setModalWindow()}
      >
        {text}
      </button>
    </>
  );
};
