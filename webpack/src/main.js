//main.js 
import "./main.css";

var greeter = require('./Greeter.js');
document.getElementById('root').appendChild(greeter());

const a = () => {
    console.log("dutao");
}

a();