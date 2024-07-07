
const Footer = () => {
  return (
    <footer className="bg-[#0A438B] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">

          {/* Stay Connected */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500"><i className="fa-brands fa-facebook text-2xl"></i></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400"><i className="fa-brands fa-twitter text-2xl"></i></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-600"><i className="fa-brands fa-youtube text-2xl"></i></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600"><i className="fa-brands fa-instagram text-2xl"></i></a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-400"><i className="fa-brands fa-pinterest text-2xl"></i></a>
            </div>
          </div>

          {/* Get Free Updates */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">Get Free Updates</h2>
            <p className="mb-4">Enter your email address below and be the first to know about the latest Travelofun updates.</p>
            <div className="flex justify-center">
              <input type="text" className="p-2 w-2/3 md:w-1/2 rounded-l-md focus:outline-none" placeholder="your email" />
              <button className="bg-primary text-white px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fa-solid fa-location-dot mr-2"></i> 
                Bannai Condominium, House #10, road #12, Dhaka.
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-location-arrow mr-2"></i>
                <a href="https://goo.gl/maps/xxxx" target="_blank" rel="noopener noreferrer" className="hover:underline">Get direction on Google map</a>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-2"></i>
                <a href="mailto:travellofun@gmail.com" className="hover:underline">travellofun@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8">
          <p className="text-sm text-white">
            <small>Copyright © 2022. Travelofun. All rights reserved.</small>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
