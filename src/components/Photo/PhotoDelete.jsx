import React from "react";
import styles from "./PhotoDelete.module.css";
import { PHOTO_DELETE } from "../../api";
import useFetch from "../../hooks/useFetch";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const onClick = async (event) => {
    const confirm = window.confirm("Tem certeza que deseja deletar?");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={onClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
