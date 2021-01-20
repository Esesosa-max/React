import React, { useState, useEffect } from "react";
import firebase from "../config/config";
import { Link } from "react-router-dom";
function Dashborad() {
  const [blogs, setBlogs] = useState();
  const db = firebase.firestore();
  useEffect(() => {
    db.collection("stories").onSnapshot((snap) => {
      setBlogs(snap.docs);
    });
  }, []);

  const handle = (e) => {
    db.doc(`stories/${e.target.id}`)
      .delete()
      .then(function (doc) {
        alert("Document deleted");
      })
      .catch(function (error) {});

    console.log(e.target.id);
  };
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Blogs</th>
            <th>operation</th>
          </tr>
        </thead>

        <tbody>
          {blogs
            ? blogs.map((doc) => {
                return (
                  <tr>
                    <td>{doc.data().title}</td>

                    <td>
                      <button className=" btn red" id={doc.id} onClick={handle}>
                        Delete
                      </button>
                    </td>

                    <td>
                      <Link className="btn blue" to={"/edit/" + doc.id}>
                        Edit
                      </Link>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Dashborad;
