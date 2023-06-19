import React from "react";
import ImageCard from "./ImageCard";
import images from "./demoImages";

export default function Gallery() {
  return (
    <div className="pt-10">
      <div className="grid grid-cols-4 gap-6">
        {images.map((image) => (
          <ImageCard
            key={image.title}
            imageUrl={image.src}
            publisher={image.createdBy}
            className="m-3"
          />
        ))}
      </div>
    </div>
  );
}
