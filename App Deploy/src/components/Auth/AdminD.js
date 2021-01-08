import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import firebase from "../config/config";
import track  from './Track'
function AdminD(props) {
    const db = firebase.firestore()
const url = '/blogs/' 
const [blogs , setBlogs] = useState([])
useEffect(() => {
  db.collection('user').onSnapshot(snapshot => {
setBlogs(snapshot.docs.map(doc => doc.data()))
  })
})
const handleClick = e => {

      
      // User is signed in.

        let imgRef = firebase.storage().ref().child(`images/${props.file}`)
    

    imgRef.delete().then(() => {

console.log("File Deleted Suceefully")
        db.collection('Blogs').doc(props.id).delete().then(() => {
   console.log("Document Deleted Successfully")
    } )
  })

}
  return (
 
 
<tr>
      <th scope="row">1</th>
      <td><Link to={url + props.id}>{props.title}</Link></td>   
</tr>
  );
}

export default AdminD;
