import { BiSearch } from 'react-icons/bi';
import './Searchbar.css';

export const Searchbar = () => {
  return (
    <header className="searchbar">
      <form className="form">
        <button type="submit" className="button">
          <BiSearch value={{ className: 'react-icons-search' }} />
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
