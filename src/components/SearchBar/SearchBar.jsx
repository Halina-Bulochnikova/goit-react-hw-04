import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <section className={css.header}>
      <header>
        <Formik initialValues={{ query: "" }} onSubmit={() => {}}>
          <Form className={css.searchForm}>
            <IoIosSearch className={css.searchIcon} />
            <Field
              className={css.searchField}
              type="text"
              autoComplete="off"
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

