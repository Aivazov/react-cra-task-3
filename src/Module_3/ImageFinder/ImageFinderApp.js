import { Component } from 'react';
import * as API from './services/api';

import { Searchbar } from "./components/Searchbar/Searchbar";

export default class ImageFinderApp extends Component {
  state = {
    imageGalleryPage: null,
    loading: false,
    error: null,
    status: 'idle',
  };

  async componentDidMount() {
    try {
      this.setState({ status: 'pending' });
      const images = await API.getImages();
      console.log(images);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        {/* The Gallery will be here soon... */}
        <Searchbar />
      </div>
    );
  }
}
