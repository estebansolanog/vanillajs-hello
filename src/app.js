/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("button").addEventListener("click", ejecutar);
};

let pronoun = ["my", "the", "our"];
let adjective = [
  "small",
  "tense",
  "helpful",
  "curious",
  "huge",
  "perfect",
  "friendly"
];
let noun = [
  "wrecker",
  "car",
  "helper",
  "local",
  "neighbour",
  "pet",
  "rocket",
  "specimen"
];
let site = [".com", ".us", ".es", ".io"];

const ejecutar = () => {
  console.log("button pressed");
  let text;
  let paragraph;
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let n = 0; n < noun.length; n++) {
        for (let b = 0; b < site.length; b++) {
          console.log(pronoun[i] + adjective[j] + noun[n] + site[b]);
          paragraph = document.createElement("p");
          text = document.createTextNode(
            pronoun[i] + adjective[j] + noun[n] + site[b]
          );
          paragraph.appendChild(text);
          document.querySelector("#domain-results").appendChild(paragraph);
        }
      }
    }
  }
};
