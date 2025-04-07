import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";



const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, options) => {
    console.log(values);
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
       onAddContact(newContact);
       options.resetForm();
  };

  const initialValues = {
    name: "",
    number: "",
  };
  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 chars")
      .max(50, "Max 50 chars")
      .trim()
      .required(),
    number: Yup.string()
      .min(6, "Min 6 chars")
      .max(50, "Max 50 chars")
      .trim()
      .required(),
  });
  return (
    <Formik
      validationSchema={ContactFormSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.formBlock}>
        <label className={css.label}>
          <span className={css.labelText}>Name</span>
          <Field className={css.field} name="name"></Field>
          <ErrorMessage className={css.error} name="name" component="div" />
        </label>
        <label className={css.label}>
          <span className={css.labelText}>Number</span>
          <Field className={css.field} name="number"></Field>
          <ErrorMessage className={css.error} name="number" component="div" />
        </label>
        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
