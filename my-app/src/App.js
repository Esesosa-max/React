import { useState } from "react";

import NameList from "./comps/NameList";


function App() {
  const [names,setName] = useState([{
    title:'Tech Upfront',
    id:5,
  },
  {
    title:'Alex',
    id:6,
  }
])
const [UserData,setUserData] = useState('')

const handleClick = e =>{
  setName([ ...names ,{title:UserData,id:Math.random() *20}])
  console.log(names)
}

const DeleteName = id =>{
  const Newname = names.filter(name => name.id != id)
  setName(Newname)
}
  return (
    <div className="App">
        <input type='text' onChange={(e) => setUserData(e.target.value)} />
            <button onClick={handleClick} >Submit</button>
        {names.map(name => {
       

           return  <NameList title={name.title} id={name.id} deleteI={DeleteName} />
           
          
        })}
    </div>
  );
}

export default App;
