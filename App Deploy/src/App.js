import { BrowserRouter, Route } from "react-router-dom";
import signup from "./components/Auth/Users";
import user from "./components/Auth/User";
import Each from "./components/Blogs/Each";
import New from "./components/Blogs/New";
import Admin from './components/Auth/Admin' 
import home from "./components/layout/Home";
import Login from "./components/Auth/Login";
import Navbar from "./components/layout/Navbar";
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route  path="/new" component={New} />
        <Route exact path="/" component={signup} />
        <Route path="/Login" component={Login} />
        <Route path="/home" component={home} />
                <Route exact path="/admin" component={Admin} />
        <Route path="/users/:user_id" component={user} />

         <Route path="/blogs/:post_id" component={Each} /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
