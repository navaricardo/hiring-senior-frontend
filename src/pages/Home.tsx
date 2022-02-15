import { FunctionComponent } from "react";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex py-6 gap-8 sm:px-0">
          <div className="border-2 border-dashed border-gray-300 w-1/2">1</div>
          <div className="border-2 border-dashed border-gray-300 w-1/2">2</div>
        </div>
        {/* /End replace */}
      </div>
    </main>
  );
};

export default Home;
