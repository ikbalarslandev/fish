interface TemplateProps {
  item: number;
  choosen: number;
  setChoosen: (choosen: number) => void;
  variant?: string;
}

const Template = ({
  item,
  choosen,
  setChoosen,
  variant = "Boat",
}: TemplateProps) => {
  return (
    <div
      onClick={() => setChoosen(item)}
      className={`${
        item === choosen ? "bg-blue-200" : "bg-white"
      }  p-4 m-4 rounded-full shadow-md flex`}
    >
      <h3>
        {variant} {item}
      </h3>
    </div>
  );
};

export default Template;
