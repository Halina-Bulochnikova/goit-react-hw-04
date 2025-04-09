import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values, actions) => {
    if (!values.query.trim()) return;
    onSubmit(values.query);
    actions.resetForm();
  };
  return (
    <section className={css.header}>
      <header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={css.searchForm}>
            <button className={css.searchBtn} type="submit">
              <IoIosSearch className={css.searchIcon} />
            </button>
            <Field
              name="query"
              className={css.searchField}
              type="text"
              autoFocus
              placeholder="Search images and photos"
            ></Field>
          </Form>
        </Formik>
      </header>
    </section>
  );
};
export default SearchBar;

