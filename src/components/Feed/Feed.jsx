import React, { useState } from "react";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      <FeedPhotos setModalPhoto={setModalPhoto} />
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
    </div>
  );
};

export default Feed;
