import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";
import { toast } from "react-hot-toast";


const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    search: "",
  };
    const handleSubmit = (values, { resetForm }) => {
      const query = values.search.trim();
      if (query) {
        onSubmit(query);
        resetForm();
      }
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
              name="search"
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

