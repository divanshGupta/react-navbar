import { Topbar } from "./Components/topbar";

function App() {
  return (
    <div className="min-h-screen flex justify-center p-5 items-center bg-amber-50">
      <Topbar />
      <div className="space-y-5 text-center gap-5 text-gray-900">
        <h1 className="lg:text-4xl text-2xl  font-bold">
          Responsive React Navbar
        </h1>
        <p className="max-w-lg text-sm leading-6">
          This is a simple example of how to build an animate a responsive hamburger menu
          with React, React-Icons and Framer Motion. I hope you like it!
        </p>
        <button className="px-5 py-3 bg-neutral-300 rounded-md text-sm text-stone-800 ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
