const inquirer = require('inquirer');
const fs = require('fs');


function baseLine(data) {
  //do I need to add script linkup at bottom? probably not because this is server side and not front end
  fs.writeFile(`../README.md`,
    `

# ${data.title}

## License
${liscenseGen(data)}

## Table of contents
  * What 
## What my project aims to do
${data.description}

  ### Installation instructions
  ${data.installation}

## What my project is used for
${data.uses}

  ### Test instructions

  ### How to contribute
  ${data.contribution}

  ### Questions
  Please email me at ${data.email} and checkout my github at ${data.github}

`,
    //this can be an arrow function "(err) => {...codehere...}"
    function (err) {
      if (err)
        console.log(err);
      else {
        console.log(`done`)
      }
    })
}
//sorry i didnt bury this in the genmarkdown.js
function liscenseGen(licenseNew){
  if (licenseNew.license == 'MIT'){
    return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  }
}

function bootyStrapBod(canInameThis) {
 return (`<div class="container">
  <div class="jumbotron">
    <h1>Bootstrap Tutorial</h1>      
    <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
  </div>
  <p>${canInameThis.loco}</p>      
  <p>${canInameThis.bio}</p>  
  <p>${canInameThis.linkin}<p> 
  <p>${canInameThis.github}<p>   
</div>`)
//maybe I can push these strings into arrays and not even make them objects and call the array and JSON.parse()
//for the HW i might beed to simply return all my info into an array of objects or objects and run them through the final funtion, I can smash objects together with different properties
}


function genStart(){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a short description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'installation',
      default: 'npm i',
    },
    {
      type: 'input',
      message: 'What are the uses for this project?',
      name: 'uses',
      default: 'Whatever I want',
    },
    {
      type: 'list',
      message: 'What are the uses for this project?',
      name: 'license',
      choices: ['MIT',],
      default: 'MIT',
    },
    {
      type: 'input',
      message: 'How can someone contribute to this project?',
      name: 'contribution',
      default: 'No contributions please',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
      default: 'n/a',
    },
    {
      type: 'input',
      message: 'What is your github?',
      name: 'github',
      default: 'n/a',
    },
  ])
  //this can be an arrow function ".then(data)=>{...manip data here...}"
  .then(function(data){
    baseLine(data)
  })
  //waits for promise I believe need to work on the global scope of body, can this be put in the function with closure?
  .then(function(){
  })
}
genStart()
















// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
