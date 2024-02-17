import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

import BANNER from "./assets/images/illustration-article.svg"
import AVATAR from "./assets/images/image-avatar.webp"
const App = () => {
  return (
    <div className="main-container">
      <div className="card-container">
        <div className="card-image">
            <img src={BANNER} alt="banner"/>
        </div>
        <div className="tag">Learning</div>
        <div className="publised-at">Published 21 dec 2023</div>
        <div className="title">
            <h1>HTML & CSS foundations</h1>
        </div>
        <div className="text">These languages are the backbone of every website, defining structure, content, and presentation.</div>
        <div className="author">
            <div className="avatar">
                <img src={AVATAR} alt="avatar"/>
            </div>
            <div className="author-name">Greg Hooper</div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://sriram-23.web.app">Sriram Balasubramanian</a>.
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
