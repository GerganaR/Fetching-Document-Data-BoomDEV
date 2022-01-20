import "./App.css";
import Document from "./Document";
import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt")
      .then((response) => response.text())
      .then((data) => {
        setValue(data);
      });
  }, []);

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
        <Document title="Terms and Conditions" content={value} />
      </div>
    </div>
  );
}

export default App;
