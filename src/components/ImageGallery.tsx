import React from "react";

interface ImageData {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageData[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="image-gallery">
      { images.map((image, index) => (
        <div key={index} className="image">
          <img src={image.src} alt={image.alt} />
          {image.alt && <p className="caption">{image.alt}</p>}
        </div>
      )) }
    </div>
  );
};

export default ImageGallery;
