import Template from "./widgets/template";

interface IBoats {
  choosen: number;
  setChoosen: (choosen: number) => void;
}

const Boats = ({ choosen, setChoosen }: IBoats) => {
  const data = [1, 2, 3, 4, 5, 6];

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
