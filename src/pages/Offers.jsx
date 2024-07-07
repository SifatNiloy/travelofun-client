
import backpackImage from "../assets/images/products/backpack.jpg";
import kedsImage from "../assets/images/products/keds.jpeg";
import pillowImage from "../assets/images/products/pillow.jpg";

const productData = [
    { name: "Adventure Backpack", image: backpackImage, price: 30 },
    { name: "Comfort Pillow", image: kedsImage, price: 25 },
    { name: "Stylish Keds", image: pillowImage, price: 40 },
  ];
  
  const Offers = () => {
    return (
        <div className="offer-page bg-gray-100 min-h-screen py-8">
          <div className="container mx-auto">
            <h2 className="text-center text-3xl font-bold mt-2 mb-4">Special Offers</h2>
            <div className="text-center">
              <h3 className="text-lg">
                Explore exclusive travel deals for every season
              </h3>
            </div>
    
            <h3 className="text-center text-lg my-4">
              Enjoy special discounts on our selected products
            </h3>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {productData.map((product, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img src={product.image} alt={product.name} className="w-full h-80 object-cover object-center" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-700 mt-2">Price: ${product.price}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    

  
  export default Offers;