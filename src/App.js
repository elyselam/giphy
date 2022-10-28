import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [json, setJson] = useState("");
  const textInputRef = useRef();
  const [results, setResults] = useState([]);

  const handleClick = async () => {
    const res = await fetch(
      `http://api.giphy.com/v1/gifs/search?q=${textInputRef.current.value}&api_key=Er0LNZ7YEdLAuVXJn1FKj5qFgF10lodW`
    );
    const jsonRes = await res.json();
    setJson(jsonRes);
    setResults(jsonRes.data);
  };

  return (
    <div className="App">
      <input type="text" ref={textInputRef} />
      <button onClick={handleClick}>submit</button>
      <div class="container">
        {results.map((result) => (
          <div class="img-container">
            <h2>Title: {result.title}</h2>
            <div class="img-item">
              <img src={`${result.images.original.url}`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;

//Er0LNZ7YEdLAuVXJn1FKj5qFgF10lodW
//api.giphy.com/v1/gifs/search?q=cheeseburgerz&api_key=Er0LNZ7YEdLAuVXJn1FKj5qFgF10lodW

//display list of titles and images
