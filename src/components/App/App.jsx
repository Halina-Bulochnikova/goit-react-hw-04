import css from "../App/App.module.css";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import contactsDate from "../contactsDate.json";
import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const loadContactsFromLocalStorage = () => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : contactsDate;
  };

  const [contacts, setContacts] = useState(loadContactsFromLocalStorage);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>

      <ContactForm onAddContact={handleAddContact} />

      <SearchBox filter={filter} onFilterChange={handleFilterChange} />

      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};
export default App;
