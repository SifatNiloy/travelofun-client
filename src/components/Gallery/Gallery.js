import React from "react";
import tourist1 from "../../../src/images/gallery/tourist-1.jpg";
import tourist2 from "../../../src/images/gallery/tourist-2.jpg";
import tourist3 from "../../../src/images/gallery/tourist-3.jpg";
import tourist4 from "../../../src/images/gallery/tourist-4.jpg";
import tourist5 from "../../../src/images/gallery/tourist-5.jpg";
import tourist6 from "../../../src/images/gallery/tourist-6.jpg";
import "./Gallery.css";

const Gallery = () => {
  const images = [tourist1, tourist2, tourist3, tourist4, tourist5, tourist6];

  return (
    <div className="container">
      <h2 className="text-center my-4 p-3">GALLERY OF OUR TOURISTS</h2>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <img
              className="tourist-img img-fluid rounded"
              src={image}
              alt={`Tourist ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
