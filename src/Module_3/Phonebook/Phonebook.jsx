import React from 'react';
import NameField from './NameFieldInput';
import NumberField from './NumberFieldInput';
import ButtonField from './ButtonFieldInput';
import ContactList from './ContactList';
// import css from './Statistics.module.css';
// import css from './Phonebook.module.css';
import './Phonebook.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Component } from './Phonebook.styled';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Albert Klement', number: '555-88-53' },
      { id: 'id-2', name: 'Morti Coul', number: '555-17-22' },
      { id: 'id-3', name: 'Harry Williams', number: '555-89-12' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    // const contacts = localStorage.getItem('contacts');
    // const parsedContacts = JSON.parse(contacts);
    // this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (e) => {
    e.preventDefault();
    let newContact = {
      id: 'id-' + Math.floor(Math.random() * 100), //generating unique id
      name: this.state.name,
      number: this.state.number,
    };

    this.formReset();

    // this.state.contacts.push(newContact);

    this.setState((prev) => ({
      contacts: [...prev.contacts, newContact],
    }));
    console.log(this.state.contacts);
  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  showContacts = () => {
    console.log(this.state.contacts);
  };

  controledSubmit = (e) => {
    e.preventDefault();
    // this.setState({ name: e.currentTarget.value });

    //it is really useless practice because of the linear of the handlers.
    //lets create a versitale handler refer to a name attribute of the input fields

    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.formReset();
    console.log(this.state);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
    console.log(this.state.filter);
  };

  // filteringContacts = () => {
  //   const normalizedFilter = this.state.filter.toLowerCase();
  //   return this.state.contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //     );
  // }

  // uncontroledSubmit(e) {
  //   e.preventDefault();
  //   const { name, number } = e.target.elements;

  //   console.log('Your name: ', name.value);
  //   console.log('Your number: ', number.value);

  //   this.setState((prev) => ({ name: name.value }));
  //   // return name.value;
  //   // OR
  //   // console.log('Your name: ', e.target.elements.name.value);
  //   // console.log('Your number: ', e.target.elements.number.value);
  // }

  formReset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { contacts, filter } = this.state;
    // console.log(this.state.contacts);

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <div className="Phonebook">
        <h1>Phonebook</h1>
        <form
          className="border p-3 mb-3"
          autoComplete="off"
          onSubmit={this.addContact}>
          <NameField
            controledSubmit={this.controledSubmit}
            name={this.state.name}
          />
          <NumberField
            controledSubmit={this.controledSubmit}
            name={this.state.number}
          />
          <ButtonField />
        </form>
        <h2 className="mb-3">Contacts</h2>

        <label className="d-block mb-1">
          Find contacts by name
          <input
            type="text"
            className="d-block mt-1"
            value={filter}
            onChange={this.changeFilter}
          />
        </label>

        <ul className="ulStyle">
          {contacts.length ? (
            <ContactList
              contacts={filteredContacts}
              onDelete={this.removeContact}
            />
          ) : (
            <p>No any contacts</p>
          )}

          {/* {Object.keys(this.state.contacts).map((el, index) => {
            const contactsIds = contacts[index].id;
            const contactsName = contacts[index].name;
            const contactsNumber = contacts[index].number;

          
          return (
            <li key={index} className="listStyle">
              <p className='listStylePar'>
                {contactsName}:{' '}
                {contactsNumber} 
                <button type='button' className="btn btn-dark" onClick={() => {this.removeContact(contactsIds)}}>Delete</button>
              </p>
            </li>
              );
            })
          } */}
        </ul>
      </div>
    );
  }
}

export default Phonebook;
