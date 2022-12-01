import "./App.css";
import { useState } from "react";

function App() {
  const [arr, setArr] = useState([
    {
      id: 1,
      title: "react를 배워봅시다",
    },
  ]);
  const [title, setTitle] = useState("");

  const writeTitle = (e) => {
    setTitle(e.target.value);
  };
  const addList = () => {
    if (title) {
      const newTitle = {
        id: arr[arr.indexOf(arr[arr.length - 1])].id + 1,
        title: title,
      };
      setArr([...arr, newTitle]);
    }
  };
  return (
    <div className="App">
      <div className="inputBox">
        <input type="text" onChange={writeTitle} value={title} />
        <button onClick={addList}>추가하기</button>
      </div>
      <ul>
        {arr.map((list) => (
          <li key={list.id}>
            <div>{list.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
