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
  * [Description](#what-my-project-aims-to-do)
  * [Questions](#questions)
  * [How to Contribute](#how-to-contribute)
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
  Please email me at ${data.email} and checkout my github at <a href=https://github.com/${data.github}>https://github.com/${data.github}</a>

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
  }else if(licenseNew.license == 'Mozilla'){
    return `
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

Covered Software is provided under this License on an “as is” basis, without warranty of any kind, either expressed, implied, or statutory, including, without limitation, warranties that the Covered Software is free of defects, merchantable, fit for a particular purpose or non-infringing. The entire risk as to the quality and performance of the Covered Software is with You. Should any Covered Software prove defective in any respect, You (not any Contributor) assume the cost of any necessary servicing, repair, or correction. This disclaimer of warranty constitutes an essential part of this License. No use of any Covered Software is authorized under this License except under this disclaimer.
    
Under no circumstances and under no legal theory, whether tort (including negligence), contract, or otherwise, shall any Contributor, or anyone who distributes Covered Software as permitted above, be liable to You for any direct, indirect, special, incidental, or consequential damages of any character including, without limitation, damages for lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses, even if such party shall have been informed of the possibility of such damages. This limitation of liability shall not apply to liability for death or personal injury resulting from such party’s negligence to the extent applicable law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so this exclusion and limitation may not apply to You.`
  }else if(licenseNew.license == 'Apache'){
    return `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`
  }
}

//maybe I can push these strings into arrays and not even make them objects and call the array and JSON.parse()
//for the HW i might beed to simply return all my info into an array of objects or objects and run them through the final funtion, I can smash objects together with different properties


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
      choices: ['MIT','Mozilla','Apache'],
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
      message: 'What is your github username?',
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
