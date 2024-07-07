import { useEffect, useState } from "react"; // Updated import name to match the component name
import "tailwindcss/tailwind.css";
import SinglePackage from "./SinglePackage";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const getPackages = async () => {
      try {
        const response = await fetch("https://travelofun-api.sifatniloy.top/packages");
        if (response.ok) {
          const data = await response.json();
          setPackages(data);
        } else {
          throw new Error("Failed to fetch packages");
        }
      } catch (error) {
        console.error("Error fetching packages:", error);
      }
    };
    getPackages();
  }, []); // Ensure useEffect runs only once by providing an empty dependency array

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <h2 className="my-5 text-3xl font-bold text-center text-gray-800">
        Our Packages
      </h2>
      <div className="container mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {packages.map((singlePackage) => (
            <SinglePackage
              key={singlePackage._id}
              singlePackage={singlePackage}
              className="transition-transform transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
