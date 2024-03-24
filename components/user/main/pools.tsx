import Template from "../widgets/template";
import { useRouter } from "next/navigation";

const Pools = ({ choosen, setChoosen }: any) => {
  const data = [1, 2, 3, 4, 5, 6];

  const router = useRouter();

  if (choosen) {
    router.push("/user/form");
  }

  return (
    <div className="bg-gray-200 w-screen flex flex-col items-center my-16">
      <h2>Pools</h2>
      <div className="flex flex-wrap items-center justify-center">
        {data.map((item) => (
          <div key={item}>
            <Template
              item={item}
              choosen={choosen}
              setChoosen={setChoosen}
              variant="Pools"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pools;
