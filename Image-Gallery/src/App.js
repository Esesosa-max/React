import Form from "./comps/Form";
import Navbar from "./comps/Navbar";
import All from "./comps/All.js";
function App() {
  return (
    <div>
      <Navbar />
      <h5 class="text-center red-text">Upload An Image To The Cloud</h5>
      <Form />

      <All></All>
    </div>
  );
}

export default App;
