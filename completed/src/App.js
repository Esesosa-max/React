import Home from "./components/layout/Home";
import Dashborad from "./components/Blogs/Dashborad";
import New from "./components/Blogs/New";
import Edit from "./components/Blogs/Edit";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/new" component={New} />
        <Route path="/dashborad" component={Dashborad} />
        <Route path="/edit/:id" component={Edit} />
      </div>
    </BrowserRouter>
  );
}

export default App;
