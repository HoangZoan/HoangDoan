import "./index.css";

function ImagesList({ items }) {
  return (
    <ul className="images-list">
      {items.map(({ id, alt_description, urls }) => (
        <li key={id}>
          <img src={urls.small_s3} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
}

export default ImagesList;
