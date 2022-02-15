import { FunctionComponent } from "react";

interface AdminProps {}

const Admin: FunctionComponent<AdminProps> = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex py-6 gap-8 sm:px-0">
          <div className="border-2 border-dashed border-gray-300 w-full">
            ADMIN
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
