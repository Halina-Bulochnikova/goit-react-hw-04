import css from './ImageCard.module.css';

const ImageCard = ({ result }) => {
if (!result) return null;
const { urls } = result;
  return (
    <li className={css.cardItem}>
      <img
        src={result.urls.small}
        alt={result.alt_description}
        width={320}
        height={240}
      />
      <span>Likes</span>
      <p>{result.likes}</p>
    </li>
  );
};
export default ImageCard;