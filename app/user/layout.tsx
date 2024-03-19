import { Nav } from "./_components/nav";
import { RoleGate } from "@/components/auth/role-gate";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-auto min-h-full w-full flex flex-col  items-center  ">
      <Nav />

      <RoleGate allowedRole="USER">
        <div className="mb-16">{children}</div>
      </RoleGate>
    </div>
  );
};

export default ProtectedLayout;
