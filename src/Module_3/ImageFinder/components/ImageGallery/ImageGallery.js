import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = (items) => {
  console.log(items.items)
  return (
    <ul className="gallery">
      {/* <ImageGalleryItem images={items} /> */}
      {/* {items.items.map((item) => (
        <li key={item.id}>{item.previewURL}</li>
      ))} */}
    </ul>
  );
};
