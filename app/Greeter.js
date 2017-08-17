// Greeter.js
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = "Hi 123 there and greetings!";
//   return greet;
// };


// var config = require('./config.json');

// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = config.greetText;
//   return greet;
// };

//Greeter,js
import React, {Component} from 'react'
import config from '../public/config.json';//使用此JSON文件的相对路径

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter