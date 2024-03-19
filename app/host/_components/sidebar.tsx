import Link from "next/link";
import { currentUser } from "@/lib/auth";
import Image from "next/image";

export const Sidebar = async ({ className }: any) => {
  const user = await currentUser();
  const properties = user?.propertyIds;

  return (
    <aside
      className={`bg-gray-400 min-h-full w-[250px] p-4 shadow-sm  flex-col items-center ${className}`}
    >
      <p className="text-2xl">Fish</p>
    </aside>
  );
};
