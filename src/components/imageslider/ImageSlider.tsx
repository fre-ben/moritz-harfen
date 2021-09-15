import * as React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export type ImageSliderProps = {
  images?: ReactImageGalleryItem[];
};

function ImageSlider({ images }: ImageSliderProps) {
  const placeholderImages = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <ImageGallery
      items={images ? images : placeholderImages}
      showPlayButton={false}
      showNav={false}
    />
  );
}

export default ImageSlider;
