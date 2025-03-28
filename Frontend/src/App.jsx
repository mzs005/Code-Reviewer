import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from 'react-simple-code-editor';
import axios from 'axios';
import Markdown from "react-markdown"
import rehypeHighLight from "rehype-highlight"
import "highlight.js/styles/github.css"

function App() {

  const [code, setcode] = useState(`function sum(a, b) {    return a + b;  }`)
  const [review, setReview] = useState(``)
  useEffect(() => {
    prism.highlightAll();

  })

  // Function to handle code submission
  async function reviewcode() {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code })
    setReview(response.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setcode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, 'js')}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                color: "#ffffff",
                height: "100%",
                width: "100%",
                borderRadius: '5px'
              }}
            />
          </div>
          <div
            onClick={reviewcode}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown
          rehypePlugins={[[rehypeHighLight]]}
          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
