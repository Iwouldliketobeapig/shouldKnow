// Greeter.js
const config = require("./config.json");
import style from "./Greeter.css";

module.exports = function() {
  const greet = document.createElement('div');
  greet.textContent = config.greetText;
  greet.className = style.root;
  return greet;
};