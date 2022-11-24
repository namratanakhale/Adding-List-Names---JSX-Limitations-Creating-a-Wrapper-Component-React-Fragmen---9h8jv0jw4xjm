import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import List from "./List";
const App = () => {
  //code here
  const[value, setValue] = useState(0);
const [list, setList] = useState([])
const handleOnChange = (e)=>{
 setValue(e.target.value)
}
const handleOnClick = ()=>{
  setList((prev) => [...prev, value])
}
  return (
    <div id="main">
       <input id="input" onChange={handleOnChange} />
      <button id="button" onClick={handleOnClick}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  )
}


export default App;
