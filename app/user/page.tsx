import { Metadata } from "next";
import Boats from "@/components/user/boats";
import Pools from "@/components/user/pools";

export const metadata: Metadata = {
  description: "Pool renting made easy.",
};

const HomePage = async () => {
  return (
    <div>
      <Boats />
      <Pools />
    </div>
  );
};

export default HomePage;
