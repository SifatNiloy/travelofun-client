
import sleeping from '../assets/images/others/sleeping.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5 text-center">
      <h2 className="mt-5 text-3xl font-bold text-gray-800 md:text-4xl">
        Oops! Page not found.
      </h2>
      <p className="mt-2 text-gray-600 text-lg md:text-xl">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <img 
        src={sleeping} 
        alt="Not Found" 
        className="mt-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
      />
      <a href="/" className="mt-8 text-blue-600 hover:text-blue-800 underline">
        Return to Home
      </a>
    </div>
  );
};

export default NotFound;
