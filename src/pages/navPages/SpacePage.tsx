import { FC } from "react";
import { Space } from "../../widgets/nav/space/Space";
import { Layout } from "../../shared/assets/Layout";

export const SpacePage: FC = () => {
  return (
    <div className="mx-40">
      <Layout><Space/></Layout>
    </div>
  );
};
