import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = (items) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem images={items} />
    </ul>
  );
};
