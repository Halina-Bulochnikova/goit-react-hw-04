import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ setPage }) => {
  const onClick = () => {
    setPage((prev) => prev + 1);
  };

  return <button onClick={onClick}>Load more</button>;
};
export default LoadMoreBtn;