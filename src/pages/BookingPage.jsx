import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { id } = useParams();
  const [packageDetails, setPackageDetails] = useState(null);
  const [bookingData, setBookingData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [bookingError, setBookingError] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(`https://travelofun-api.sifatniloy.top/packages/${id}`);
        setPackageDetails(response.data);
      } catch (error) {
        console.error('Error fetching package details:', error);
      }
    };

    fetchPackageDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://travelofun-api.sifatniloy.top/orders`, {
        ...bookingData,
        packageId: id,
      });
      if (response.status === 200) {
        setBookingSuccess(true);
        setBookingError(null);
      } else {
        setBookingError('Failed to submit booking. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setBookingError('Failed to submit booking. Please try again later.');
    }
  };

  if (!packageDetails) {
    return <div>Loading...</div>;
  }

  const { name, image, price, description, duration } = packageDetails;

  return (
    <div className="container mx-auto mt-10 p-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">{name}</h2>
      <div className="flex justify-center">
        <img src={image} alt={name} className="rounded-lg shadow-md" style={{ maxWidth: '400px' }} />
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold text-gray-700">Description:</h3>
        <p className="text-gray-600">{description}</p>
        <h3 className="text-xl font-semibold text-gray-700 mt-3">Price:</h3>
        <p className="text-gray-600">${price}</p>
        <h3 className="text-xl font-semibold text-gray-700 mt-3">Duration:</h3>
        <p className="text-gray-600">{duration} days</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={bookingData.fullName}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={bookingData.phone}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message (optional):</label>
          <textarea
            id="message"
            name="message"
            value={bookingData.message}
            onChange={handleInputChange}
            rows="3"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {bookingError && <p className="text-red-500">{bookingError}</p>}
        {bookingSuccess && <p className="text-green-500">Booking submitted successfully!</p>}
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
