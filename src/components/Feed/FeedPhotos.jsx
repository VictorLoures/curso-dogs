import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import { PHOTOS_GET } from "../../api";
import Error from "../helper/Error";
import Loading from "../helper/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ user, setModalPhoto, page, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: page, total: 3, user: 0 });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < 3) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, page]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
  else return null;
};

export default FeedPhotos;
