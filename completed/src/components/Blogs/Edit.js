import React, { useState, useEffect } from "react";
import firebase from "../config/config";
function Edit(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();
  const db = firebase.firestore();

  useEffect(() => {
    let title_el = document.querySelector(".title");
    let body_el = document.querySelector(".body");

    db.collection("stories")
      .doc(props.match.params.id)
      .get()

      .then((snap) => {
        title_el.value = snap.data().title;
        body_el.value = snap.data().body;
      });

    console.log(props.match.params.id);
  }, []);

  const Record = (e) => {
    let title_el = document.querySelector(".title");
    let body_el = document.querySelector(".body");
    e.preventDefault();
    db.collection("stories").doc(props.match.params.id).update({
      title: title_el.value,
      body: body_el.value,

      date: Date.now(),
    });
  };
  return (
    <div className="container">
      <h4>Edit</h4>
      <div class="row">
        <form class="col s12" onSubmit={Record}>
          <div class="row">
            <div class="input-field col l12">
              <i class="material-icons prefix">Title</i>
              <input
                class="title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="icon_prefix">Title</label>
            </div>
            <div class="input-field col l12">
              <i class="material-icons prefix">Body</i>
              <input
                class="body"
                type="text"
                onChange={(e) => setBody(e.target.value)}
              />
              <label for="icon_telephone">Body</label>
            </div>

            <button className="blue btn ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
