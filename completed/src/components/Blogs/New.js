import React, { useState, useEffect } from "react";
import firebase from "../config/config";
function New() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();
  const db = firebase.firestore();
  const auth = firebase.auth();

  const Record = (e) => {
    e.preventDefault();
    db.collection("stories").doc(title).set({
      title: title,
      body: body,
      user: "idukpaye@gmail.com",
      date: Date.now(),
    });
  };
  return (
    <div className="container">
      <h4>Upolad a New Blog</h4>
      <div class="row">
        <form class="col s12" onSubmit={Record}>
          <div class="row">
            <div class="input-field col l12">
              <i class="material-icons prefix">Title</i>
              <input
                id="icon_prefix"
                type="text"
                class="validate"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label for="icon_prefix">Title</label>
            </div>
            <div class="input-field col l12">
              <i class="material-icons prefix">Body</i>
              <input
                id="icon_telephone"
                type="tel"
                class="validate"
                onChange={(e) => setBody(e.target.value)}
              />
              <label for="icon_telephone">Body</label>
            </div>

            <button className="blue btn " disabled={!body || !title}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;
