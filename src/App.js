import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🐅": "Tiger",
  "🐆": "Leopard",
  "🐴": "Horse Face",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setMeaning(meaning);
    } else setMeaning("Not Found");
  }

  function getEmojiValueHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Travel & Places </h1>
      <input type="text" onChange={inputHandler}></input>
      <div className="meaning-out">Meaning : {meaning}</div>
      <h3>These are some popular Travel & Places Emojis</h3>
      <span>Click on them or type them out in the textbox above</span>
      <div>and we will show you their meanings</div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center"
        }}
      >
        {emojisWeKnow.map(function (emoji, index) {
          return (
            <li
              key={emoji}
              style={{
                fontSize: "1.3rem",
                padding: "1.2rem",
                cursor: "pointer"
              }}
              onClick={() => getEmojiValueHandler(emoji)}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
