const inquirer = require('inquirer');
const fs = require('fs');

const displayMD = (answers) => {

    const {title, name, description, installation, usage, license, contributing, tests, questions} = answers;

    

    console.log(license);

    return (`
[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
# ${title}
## Description
${description}
## Contents  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [Questions](#questions)  
## Installation  
${installation}
## Usage
${usage}  
## Contributing
${contributing}
## Tests
${tests}
## Questions
- Email: ${questions}  
- [GitHub](https://github.com/${name})
    `);
};

const getAnswers = () => {

    inquirer
      .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your github name?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please give installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please give usage instructions'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please chose a license:',
            choices: ["MIT", "ISC"]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please describe how to contribute:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please describe how to run tests:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please give your email address:'
        }
      ])
      .then((answers) => {
        fs.writeFile('README.md', displayMD(answers), (error)=> {if(error){console.error(error)}});
      })
      .catch((error) => {
        console.error(error);
      });
    
};

getAnswers();

