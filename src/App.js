import React, { useState } from "react";
import ReactMarkdown from "react-markdown/with-html";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <div className="areacontainer">
        <p className="name">Editor</p>
        <textarea
          name="editor"
          value={text}
          onChange={e => setText(e.target.value)}
          id="editor"
          cols="30"
          rows="10"
          className="area"
        ></textarea>
      </div>
      <div>
        <div className="markdowncontainer">
          <p className="name">Markdown</p>
          <ReactMarkdown
            source={text}
            escapeHtml={false}
            id="preview"
            className="markdown"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
