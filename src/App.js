import React, { useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <textarea
        name="editor"
        value={text}
        onChange={e => setText(e.target.value)}
        id="editor"
        cols="30"
        rows="10"
      ></textarea>
      <ReactMarkdown source={text} escapeHtml={false} id="preview" />
    </div>
  );
}

export default App;
