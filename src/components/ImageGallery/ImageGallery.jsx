import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({results}) => {
  return (
    <ul className={css.gallery}>
      {results.map((result) => (
        <ImageCard key={result.id} result={result} />
      ))}
    </ul>
  );
};

export default ImageGallery;