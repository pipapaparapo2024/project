import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const NavChoice: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div>
          <ul className="my-3 bg-gray-400 h-130 w-60 rounded-lg">
            <li onClick={()=>navigate("/Weardrop")}>Weardrop</li>
            <li onClick={()=>navigate("/Type")}>Type</li>
            <li onClick={()=>navigate("/Space")}>Space</li>
          </ul>
        </div>
      </div>
    </>
  );
};
