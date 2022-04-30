import React from "react";
import ImagesItem from "../ImagesItem";

import "./index.css";

function ImagesList({ items }) {
  return (
    <ul className="images-list">
      {items.map(({ id, urls, alt_description, likes, user }) => (
        <ImagesItem
          key={id}
          imageSrc={urls.small_s3}
          alt_desc={alt_description}
          likes={likes}
          authorName={user.name}
          profilePic={user.profile_image.medium}
        />
      ))}
    </ul>
  );
}

export default React.memo(ImagesList);
