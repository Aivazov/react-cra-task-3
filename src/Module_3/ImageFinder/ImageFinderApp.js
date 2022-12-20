import { Component } from 'react';
// import * as ImageGalleryAPI from './services/gallery_api';

import Searchbar from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
// import { ImageGalleryItem } from './components/ImageGalleryItem/ImageGalleryItem';

export default class ImageFinderApp extends Component {
  state = {
    imageSearchRequest: '',
    images: [],
    loading: false,
    error: null,
    status: 'idle',
  };

  async componentDidMount() {
    // try {
    //   this.setState({ loading: true });
    //   const images = await ImageGalleryAPI.getImages();
    //   this.setState({ images, loading: false });
    //   console.log('images from API', this.state.images);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.imageSearchRequest !== this.props.imageSearchRequest) {
      console.log('The search request was changed');

      this.setState({ status: 'pending' }); //loading: true, pokemon: null,

      const API_KEY = '31522217-1daa00f4dac69c1e930d1cd07';
      const PAGES = 'per_page=12';
      let page = 1;

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.imageSearchRequest}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject(
              new Error(
                `We do not have a Pokemon with name "${this.props.pokemonName}"`
              )
            );
          })
          .then((images) => {
            console.log(images);
            this.setState({ images, status: 'resolved' });
          })
          .catch((error) => this.setState({ error, status: 'rejected' }));
        // .finally(this.setState({ loading: false, error: null }));
      }, 500);
    }
  }

  handleSearchName = (value) => {
    this.setState({ imageSearchRequest: value });
  };

  render() {
    console.log('imageSearchRequest: ', this.state.images);
    // const obj = Object.values(this.state.images.hits);
    // const array = this.state.images.hits;
    // console.log('state images in the render el', array);
    // array.map((el) =>
    //   console.log('each el: ', el)
    // );
    // console.log('mapped hits: ', mapped);
    return (
      <div>
        {/* The Gallery will be here soon... */}
        <Searchbar onSubmit={this.handleSearchName} />

        <ImageGallery items={this.state.images.hits} />
      </div>
    );
  }
}
