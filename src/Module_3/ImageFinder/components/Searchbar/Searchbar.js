import { Formik, Form, Field } from 'formik';
import { BiSearch } from 'react-icons/bi';
import './Searchbar.css';

export const Searchbar = () => {
  return (
    <header className="searchbar">
      <Formik >
        <Form className="form">
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
          />
        </Form>
      </Formik>
    </header>
  );
};
