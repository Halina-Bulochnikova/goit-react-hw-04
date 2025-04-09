import css from './ImageGallery.module.css';

const ImageGallery = (results) => {
  return (
    <ul>
      {Array.isArray(results) &&
        results.map((item) => (
          <li key={item.id}>
            <img src={item.urls.small} alt={item.alt_description} />
            <p>{item.alt_description || "No foto"}</p>
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;