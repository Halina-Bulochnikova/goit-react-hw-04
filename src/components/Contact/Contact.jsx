import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contatcCard}>
        <span className={css.nameNumber}>
          <FaUserAlt className={css.contactElem} size="16" />{" "}
          <p className={css.name}>{name} </p>
        </span>
        <span className={css.nameNumber}>
          <FaPhone className={css.contactElem} size="16" />{" "}
          <p className={css.name}>{number} </p>
        </span>
      </div>
      <button className={css.deleteButton} onClick={() => onDelete(id)}>
        DELETE
      </button>
    </li>
  );
};

export default Contact;
