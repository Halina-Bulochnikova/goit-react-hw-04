import React from "react";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.contaktList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
export default ContactList;

