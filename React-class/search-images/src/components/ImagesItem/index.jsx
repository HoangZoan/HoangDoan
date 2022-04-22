import "./index.css";

function ImagesItem({ imageSrc, alt_desc, likes, authorName, profilePic }) {
  return (
    <li className="image-item">
      <img src={imageSrc} alt={alt_desc} />

      <div className="pic-details">
        <div className="pic-text">
          <div className="author">{authorName}</div>
          <div className="likes">{likes} likes</div>
        </div>
        <img src={profilePic} alt={authorName} />
      </div>
    </li>
  );
}

export default ImagesItem;
