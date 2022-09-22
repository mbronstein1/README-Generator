// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please provide a title for your application:",
        name: "title",
    },
    {
        type: "input",
        message: "Please provide a description for your application:",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide any installation instructions for your application:",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide any information that will help others use your application:",
        name: "usage",
    },
    {
        type: "list",
        message: "If interested in licensing your application, please select one below:",
        name: "license",
        choices: ["MIT", "GPLv3", "Apache", "none"],
    },
    {
        type: "input",
        message: "Please provide guidelines for how to contribute to your application:",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please provide any testing instructions to assist users:",
        name: "testing",
    },
    {
        type: "input",
        message: "Please provide your GitHub username:",
        name: "github",
    },
    {
        type: "input",
        message: "Please provide a preferred email address:",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
    err ? console.error(err) : console.log("Success!"))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => writeToFile("README.md", response));
    };

// Function call to initialize app
init();
