import { Component } from 'react';
import * as ImageGalleryAPI from './services/gallery_api';

import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './components/ImageGalleryItem/ImageGalleryItem';

export default class ImageFinderApp extends Component {
  state = {
    imageGalleryPage: null,
    images: [],
    loading: false,
    error: null,
    status: 'idle',
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const images = await ImageGalleryAPI.getImages();
      this.setState({ images, loading: false });
      console.log('images from API', this.state.images);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {}

  render() {
    // const obj = Object.values(this.state.images.hits);
    const array = this.state.images.hits;
    console.log('state images in the render el', array);
    // array.map((el) =>
    //   console.log('each el: ', el)
    // );
    // console.log('mapped hits: ', mapped);
    return (
      <div>
        {/* The Gallery will be here soon... */}
        <Searchbar />
        <ImageGallery items={this.state.images.hits} />
      </div>
    );
  }
}
