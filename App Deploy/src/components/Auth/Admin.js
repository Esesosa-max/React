import { NavLink, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import firebase from "../config/config";
import AdminD from './AdminD' 
function Admin(props) {

  const home = '/home'
  const New = '/new'
  const db = firebase.firestore()
const [blogs , setBlogs] = useState([])
    useEffect(() => {

     firebase.auth().onAuthStateChanged(user => {
    if(user){
      if(user.email === 'idukpaye@gmail.com'){
        
      }
      else{
        
          window.location.href = '/home'
      }
    }
    else{
      window.location.href = '/Login'
    }
  })

      db.collection('Blogs').onSnapshot(snapshot => {

        snapshot.docs.map(doc => {
setBlogs(snapshot.docs)

        })
      })
    },[blogs])
  return (
 
    <div>
    
<nav class='navbar navbar-expand-lg navbar-dark bg-warning'>
  <div class='container-fluid'>
    <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation'>
      <span class='navbar-toggler-icon'></span>
    </button>
    <a class="navbar-brand" href="#">Admin</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link"  to={home}   >Public</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to={New}   >New Blog</Link>
        </li>
  
     
      </ul>
      
    </div>
  </div>
</nav>

  <div className=''>

<div class='jumbotron jumbotron-fluid'>
  <div class='container'>
    <h1 class='display-4'>File Bunker</h1>
    <p class='lead'>Welcome to file Bunker Admin Panel</p>
      <table class='table table-dark'>
  <thead>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>Blogs</th>
      <th scope='col bg-primary'>users</th>
    </tr>
  </thead>
  <tbody>
 
   {
      blogs ? (    blogs.map(doc => {
      return(

         <AdminD  title={doc.data().title} body={doc.data().body} img={doc.data().ImgUrl} key={doc.id}  id={doc.id} file={doc.data().file}/>
      )
        })
      ) : (
          <AdminD  title={'none'} body={'none'} img={'none'}/>

      )

    }
  </tbody>
</table>

  </div>
</div>
 
  </div>

    </div>

  );
}

export default Admin;
