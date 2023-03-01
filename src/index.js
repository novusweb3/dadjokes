import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

function App(props) {
  const [joke, setJoke] = useState(null);

  const onTellJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then(json => {
        setJoke(json.joke);
      });    
  };
  
  
  return (
    <div>
      <button onClick={onTellJoke}>Tell me a joke</button>
      <p>{joke}</p>
    </div>
  );
}

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);