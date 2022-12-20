import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { BiSearch } from 'react-icons/bi';
import './Searchbar.css';
import { toast } from 'react-toastify';
import { render } from '@testing-library/react';

export default class Searchbar extends Component {
  state = {
    searchRequest: '',
  };

  handleNameChange = (event) => {
    this.setState({ searchRequest: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.searchRequest);
    if (this.state.searchRequest.trim() === '') {
      return toast.error('Please enter a pokemon name');
    }
    console.log(this.state.searchRequest);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <BiSearch size="32" className="react-icons-search" />
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchRequest}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
