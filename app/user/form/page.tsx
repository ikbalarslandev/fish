"use client";

import { RecordForm } from "@/components/user/widgets/form";

const FormPage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const localInfo = window.localStorage.getItem("boatandpool");
  const info = localInfo && JSON.parse(localInfo);
  const boat = info.choosenb;
  const pool = info.choosenp;

  return (
    <div>
      <h1>Form Page</h1>
      <p>Boat {boat}</p>
      <p>Pool {pool}</p>
      <RecordForm />
    </div>
  );
};

export default FormPage;
