import { Component } from 'react';
import * as API from './services/api';

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
      const images = await API.getImages();
      this.setState({ images, loading: false });
      console.log('images from API', this.state.images);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {}

  render() {
    // console.log('array of images in the render el', this.state.images.hits);
    // const mapped = this.state.images.map((el) =>
    //   console.log('each el: ', el)
    // );
    // console.log('mapped hits: ', mapped);
    return (
      <div>
        {/* The Gallery will be here soon... */}
        <Searchbar />
        {/* <ImageGallery items={this.state.images.hits} /> */}
      </div>
    );
  }
}
