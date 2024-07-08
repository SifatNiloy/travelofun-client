/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";

const SinglePackage = ({ singlePackage }) => {
  const { _id, name, image, price, description, duration } = singlePackage;
  const navigate = useNavigate();

  const navigateToServiceDetail = (id) => {
    navigate(`/package/${id}`);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img src={image} alt={name} className="w-full h-56 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-900 font-semibold">${price}</p>
        <p className="text-gray-600 text-sm mb-4">{duration}</p>
      </div>
      <div className="px-6 pb-4">
        <Link
          to={`/package/${_id}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition"
          onClick={() => navigateToServiceDetail(_id)}
        >
          Book now <i className="fas fa-arrow-right ml-1"></i>
        </Link>
      </div>
    </div>
  );
};

export default SinglePackage;
