import { FC } from "react";
import { useStoreCard } from "./CreateStore";
import { ButtonCreate } from "./ButtonCreate";
import { style } from "./CreateStore";

export const CreateCloth: FC = () => {
  const {
    name,
    photoUrl,
    size,
    type,
    place,
    setName,
    setPhotoUrl,
    setSize,
    setType,
    setPlace,
    handleSubmit,
  } = useStoreCard();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span className="font-medium p-2">Enter Data</span>

        <input
          placeholder="Enter name..."
          className={style}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Enter photoUrl..."
          className={style}
          value={photoUrl || ""}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />

        <input
          placeholder="Enter size..."
          className={style}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        <input
          placeholder="Enter type..."
          className={style}
          value={type}
          onChange={(e) => setType(Number(e.target.value))}
        />

        <input
          placeholder="Enter place..."
          className={style}
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <ButtonCreate text="Send" />
      </div>
    </form>
  );
};