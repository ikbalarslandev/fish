import { currentUser } from "@/lib/auth";
import NavbarClient from "@/app/host/_components/navbar-client";

export const Navbar = async ({ className }: any) => {
  const user = await currentUser();
  const properties = user?.propertyIds;

  return <NavbarClient className={className} />;
};
