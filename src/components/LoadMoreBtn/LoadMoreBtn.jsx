import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage, images }) => {
  if (!images || images.length === 0) {
    return null;
  }
  const onClick = () => {
    setPage((prev) => prev + 1);
  };
  console.log("Images in LoadMoreBtn:", images);

  return (
    <button onClick={onClick} className={css.buttonLoad}>
      Хочу ще
    </button>
  );
};
export default LoadMoreBtn;
