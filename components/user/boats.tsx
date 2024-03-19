"use client";
import { useState, useEffect } from "react";

const data = [1, 2, 3, 4, 5, 6];

const Template = ({ item, choosen, setChoosen }: any) => {
  return (
    <div
      onClick={() => setChoosen(item)}
      className={`${
        item === choosen ? "bg-black" : "bg-white"
      }  p-4 m-4 rounded-full shadow-md flex`}
    >
      <h3>Boat {item}</h3>
    </div>
  );
};

const Boats = () => {
  const [choosen, setChoosen] = useState(0);
  return (
    <div className="bg-gray-200 w-screen flex flex-col items-center">
      <h2>Boats</h2>
      <div className="flex flex-wrap items-center justify-center">
        {data.map((item) => (
          <div key={item}>
            <Template item={item} choosen={choosen} setChoosen={setChoosen} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boats;
