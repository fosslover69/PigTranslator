import { useState } from "react";
import "./App.css";

function App() {
  const [pigLatin, setPigLatin] = useState("");
  return (
    <div className="App">
      <div className="main">
        <div className="title">Pig Translator</div>
        <textarea
          className="input"
          placeholder="Enter something in English"
          onChange={(e) => setPigLatin(pigLogic(e.target.value))}
        />
      </div>
      <div className="output">
        <div className="text">Your text in Pig Latin:</div>
        <div className="result">{pigLatin}</div>
      </div>
    </div>
  );
}
function pigLogic(value: string) {
  const tempPig = value.split("\n");
  let pigValue: string[] = [];
  tempPig.map((value) => {
    let splitedValue = value.split(" ");
    splitedValue.map((value) => {
      pigValue.push(value);
    });
  });
  const vowels = ["a", "e", "i", "o", "u"];
  let finalValue = "";
  pigValue.map((value) => {
    if (value != "") {
      if (vowels.includes(value.charAt(0).toLowerCase())) {
        if (value.endsWith("\n")) {
          value = value.slice(0, -1);
          value += "yay";
          finalValue += value + "\n";
        } else {
          value += "yay";
          finalValue += value + " ";
        }
      } else {
        if (value.endsWith("\n")) {
          value = value.slice(0, -1);
          value += value.charAt(0) + "ay";
          value = value.slice(1);
          finalValue += value + "\n";
        } else {
          value += value.charAt(0) + "ay";
          value = value.slice(1);
          finalValue += value + " ";
        }
      }
    }
  });
  return finalValue;
}

export default App;
