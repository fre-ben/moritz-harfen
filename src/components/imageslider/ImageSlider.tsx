import * as React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../../css/ImageSlider.css";

export type ImageSliderProps = {
  images: ReactImageGalleryItem[];
};

function ImageSlider({ images }: ImageSliderProps) {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showNav={true}
      showBullets={true}
      showThumbnails={false}
      lazyLoad={true}
    />
  );
}

export default ImageSlider;
