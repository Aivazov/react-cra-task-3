import React, { Component } from 'react';

export default class Sample extends Component {
  state = {
    contacts: [],
  };

  addContact = (username, dateOfAdding) => {
    this.setState((prevState) => {
      return { contacts: [...prevState, { username, dateOfAdding }] } ;
    });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.addContact('John', Date.now())}>
          Add contact
        </button>

        {this.state.contacts.map((contact, index) => (
          <div key={index}>
            {index + 1}: {contact.username} {contact.dateOfAdding}
          </div>
        ))}
      </div>
    );
  }
}
