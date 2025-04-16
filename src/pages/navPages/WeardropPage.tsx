import { FC } from "react";
import { Weardrop } from "../../widgets/nav/weardrop/Weardrop";
import { Layout } from "../../shared/assets/Layout";

export const WeardropPage: FC = () => {
  return (
    <div className="mx-40">
      <Layout><Weardrop/></Layout>
    </div>
  );
};
