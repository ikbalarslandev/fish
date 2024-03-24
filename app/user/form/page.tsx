"use client";

const FormPage = () => {
  const localInfo = window.localStorage.getItem("boatandpool");
  const info = JSON.parse(localInfo);
  const boat = info.choosenb;
  const pool = info.choosenp;

  return (
    <div>
      <h1>Form Page</h1>
      <p>Boat {boat}</p>
      <p>Pool {pool}</p>
    </div>
  );
};

export default FormPage;
