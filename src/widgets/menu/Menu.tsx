import { FC, useEffect } from "react";

import axios from "axios";
import { useStore } from "../../services/store";
import { PostClothBody } from "../../services/store";
import { Cart } from "../../entities/Cart";

export const Menu: FC = () => {
  const {clothes,navChoice, setClothes } = useStore();

  const getClothes = async () => {
    try {
      const response = await axios.get<PostClothBody[]>("https://67bc4e91ed4861e07b3a014b.mockapi.io/clothes");
      setClothes(response.data);
      await axios.post("localhost:8080/api/clothes", response)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getClothes();
  }, []);
  return (<div>
    {navChoice === "wardrobe" && (
      clothes.map((cloth) => (
        <div>
          wardrobe
          <Cart cloth={cloth} />
        </div>
      ))
    )}
    {navChoice === "type" && (
      clothes.map((cloth) => (
        <div>
          type
          <Cart cloth={cloth} />
        </div>
      ))
    )}
    {navChoice === "space" && (
      clothes.map((cloth) => (
        <div>
          space
          <Cart cloth={cloth} />
        </div>
      ))
    )}
  </div>
  );
};
