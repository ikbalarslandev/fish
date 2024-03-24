"use client";

import Boats from "@/components/user/boats";
import Pools from "@/components/user/pools";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [choosenb, setChoosenb] = useState(0);
  const [choosenp, setChoosenp] = useState(0);

  useEffect(() => {
    window.localStorage.setItem(
      "boatandpool",
      JSON.stringify({ choosenb, choosenp })
    );
  }, [choosenb, choosenp]);

  return (
    <div>
      <Boats choosen={choosenb} setChoosen={setChoosenb} />
      {choosenb && <Pools choosen={choosenp} setChoosen={setChoosenp} />}
    </div>
  );
};

export default HomePage;
