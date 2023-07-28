import { useState } from "react";
import Todolist from "./Todolist";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [item, setItem] = useState([]);

  const submitItem = () => {
    setItem((olditem) => {
      return [...olditem, name];
    });
    setName("")
  };

  const deleteItem =(id)=>{
    console.log("deleted");

    setItem((olditem)=>{
      return olditem.filter((arrele,indexnum)=>{
        return indexnum !== id;
      })
    })
}
  return (
    <>
    <div className="App">
      <div className="center_div">
        <br />
        <div className="head_div">
          <h1>Todo List</h1>
        </div>
        <br />
        <input
          type="text"
          value={name}
          placeholder="Add a Item"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={submitItem}>
          +
        </button>

        <ol>
          {item.map((itemValue,i) => {
            return ( 
              <Todolist 
              key={i} 
              text={itemValue}
              id={i}
              onSelect={deleteItem}
              />
            )}
          )}
        </ol>
      </div>
    </div>
    </>
  );
}

export default App;
