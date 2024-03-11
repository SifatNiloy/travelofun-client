import React from "react";
import birdImage from "../../../images/blog/bird.jpg";
import newzealand from "../../../images/blog/newzealand.jpg";
import ocenia from "../../../images/blog/ocenia.jpg";
import sydneyImage from "../../../images/blog/sydney.jpg";

const Blog = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-center text-warning">HOP ABOUT OCEANIA</h2>
          <p>
            Covering Australia, New Zealand, and a vast number of islands,
            Oceania is a region of the world focused on the Pacific Ocean. With
            so much ocean to cover to get around, it's one of the harder parts
            of the world for tourists to thoroughly explore. Australia is the
            largest country in Oceania, with cities, deserts, and rainforest to
            explore. Next, there's its neighbor New Zealand, famous for Lord of
            the Rings. After that, there are all sorts of magical tropical
            island destinations like Fiji and Palau waiting for you.
          </p>

          <h2 className="text-center py-4 text-success">
            DISCOVER YOUR AUSTRALIA
          </h2>
          <p>
            Looking for places to visit in Australia and how to make it the
            dream trip of a lifetime? Australia IS everything you've dreamed of
            and more. It's a land of colors and contrasts: from the red, dusty
            outback to the lush, tropical rainforests, with mountains,
            vineyards, and the most beautiful beaches in the world in between.
          </p>

          <div className="text-center">
            <img
              className="img-fluid my-2"
              src={birdImage}
              alt="Bird in Australia"
            />
            <br />
            <img
              className="img-fluid my-2"
              src={sydneyImage}
              alt="Sydney Opera House"
            />
          </div>

          <h2 className="text-center py-4 text-info">
            TRAVEL INDUSTRY TRENDS AND STATS
          </h2>
          <ul>
            <li>
              Convenient booking remains the biggest trend in the global travel
              industry.
            </li>
            <li>
              Solo Travel: Leisure travel is no longer just a family affair.
            </li>
            <li>
              The travel and tourism industry generated 10.4 percent of all
              global economic activity last year.
            </li>
            <li>
              The travel industry is the second-fastest-growing sector in the
              world, ahead of healthcare (+3.1%), information technology
              (+1.7%), and financial services (+1.7%), and behind only
              manufacturing.
            </li>
            <li>
              Last year, travel and tourism increased its share of leisure
              spending to 78.5 percent.
            </li>
            <li>
              Three in five travel companies say they offer customer service via
              chat.
            </li>
          </ul>

          <h2 className="text-center py-4 text-primary">
            EXPLORE NEW ZEALAND'S NATURAL BEAUTY
          </h2>
          <p>
            New Zealand, often referred to as the "Land of the Long White
            Cloud," is a captivating country that captivates visitors with its
            diverse and breathtaking landscapes. Renowned for its stunning
            scenery and outdoor adventures, New Zealand offers a wealth of
            natural wonders waiting to be explored. The geothermal wonders of
            Rotorua showcase the Earth's raw power, with bubbling mud pools and
            spouting geysers providing a mesmerizing spectacle. Meanwhile, the
            majestic Fiordland National Park boasts towering fjords, lush
            rainforests, and cascading waterfalls, making it a haven for nature
            lovers and outdoor enthusiasts alike. Whether hiking through
            pristine wilderness or enjoying the serene beauty of its lakes, New
            Zealand offers an unforgettable experience immersed in the splendors
            of the great outdoors.
          </p>
          <br />
          <img
            className="img-fluid my-2"
            src={newzealand}
            alt="Bird in Australia"
          />

          <h2 className="text-center py-4 text-danger">
            FASCINATING ISLAND DESTINATIONS
          </h2>
          <p>
            Oceania, a region rich in cultural diversity and natural wonders, is
            home to enchanting tropical islands that beckon travelers seeking
            idyllic escapes. Fiji, with its vibrant coral reefs and warm,
            welcoming locals, is a haven for those in search of both relaxation
            and adventure. Immerse yourself in the colorful underwater world,
            explore traditional Fijian villages, and unwind on pristine beaches
            surrounded by lush landscapes. Palau, another jewel in Oceania's
            crown, stands as a paradise for divers. Its crystal-clear waters
            reveal a kaleidoscope of marine life, from vibrant coral gardens to
            schools of tropical fish. Each island in Oceania possesses a unique
            charm, inviting visitors to explore and create lasting memories in
            these tropical havens.
          </p>

          <h2 className="text-center py-4 text-success">
            AUSTRALIAN CUISINE AND DELIGHTS
          </h2>
          <p>
            Australia, a continent known for its vast landscapes, is equally
            celebrated for its diverse and delicious cuisine. Indulge your taste
            buds in the unique flavors of Australian gastronomy, where iconic
            treats like Tim Tam biscuits and delectable meat pies showcase the
            country's culinary creativity. Venture into the world of Vegemite, a
            beloved Australian spread, and experience the distinct savory taste
            that has become a cultural staple. No visit to Australia is complete
            without savoring the joy of a traditional Aussie barbecue, where the
            aroma of grilled delicacies fills the air, and the laid-back
            atmosphere captures the essence of Australian hospitality. Delight
            in the rich tapestry of flavors that Australian cuisine has to
            offer, reflecting the nation's multicultural influences and culinary
            innovation.
          </p>
          <br />
          <img
            className="text-center img-fluid my-2"
            src={ocenia}
            alt="Sydney Opera House"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
