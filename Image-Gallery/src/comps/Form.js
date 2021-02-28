import React, { useState, useEffect } from "react";
import firebase from "./Config";
import { motion } from "framer-motion";
function Form() {
  const storage = firebase.storage();
  const db = firebase.firestore();
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const SubmitFun = (e) => {
    if (file) {
      const ref = storage.ref("images/" + file.name);
      const task = ref.put(file);
      task.on(
        "state_changed",
        function progress(snap) {
          console.log((snap.bytesTransferred / snap.totalBytes) * 100);
          setProgress((snap.bytesTransferred / snap.totalBytes) * 100);
        },
        function error(err) {
          console.log(err);
        },

        function completed() {
          ref.getDownloadURL().then((url) => {
            console.log("Dowloaded Url", url);
            db.collection("images").add({
              url: url,
            });
          });
        }
      );
    }
  };
  const FileFun = (e) => {
    if (e.target.files[0].type == "image/jpg" || "image/png") {
      setFile(e.target.files[0]);
    } else {
      console.log("else block", e.target.files[0]);
    }
  };
  return (
    <div class="container">
      <div class="file-field input-field">
        <div class="btn">
          <span>File</span>
          <input type="file" onChange={FileFun} />
        </div>
        <div class="file-path-wrapper">
          <input class="file-path validate" type="text" />
        </div>
      </div>
      <button class="btn blue" onClick={SubmitFun}>
        Submit
      </button>
    </div>
  );
}

export default Form;
