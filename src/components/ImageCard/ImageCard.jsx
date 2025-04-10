import css from './ImageCard.module.css';

const ImageCard = ({ result }) => {
if (!result) return null;
const { urls } = result;
  return (
    <li>
      <img src={result.urls.small} alt={result.alt_description} />
      <p>{result.alt_description || "No foto"}</p>
    </li>
  );
};
export default ImageCard;git