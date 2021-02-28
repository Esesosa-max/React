import React, { useState, useEffect } from "react";
import firebase from "./Config";
import { motion } from "framer-motion";
function All() {
  const [images, setImages] = useState();
  useEffect(() => {
    firebase
      .firestore()
      .collection("images")
      .onSnapshot((snap) => {
        setImages(snap.docs);
      });
  }, [images]);
  return (
    <div class="row container">
      {images
        ? images.map((img) => {
            return (
              <div class="col s12 m7" key={img.id}>
                <div class="card">
                  <div class="card-image">
                    <img src={img.data().url} />
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default All;
