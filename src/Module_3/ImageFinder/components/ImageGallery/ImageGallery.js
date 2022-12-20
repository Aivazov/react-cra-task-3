import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = (items) => {
  const array = items.items;
  return (
    <ul className="gallery">
      {/* <ImageGalleryItem images={items} /> */}
      {array?.map((item) => (
        <li key={item.id}>{item.previewURL}</li>
      ))}
    </ul>
  );
};
