// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please provide a title for your application (*required):",
        name: "title",
        validate: (input) => input ? true : console.log("Please enter a title")
    },
    {
        type: "input",
        message: "Please provide a description for your application (*required):",
        name: "description",
        validate: (input) => input ? true : console.log("Please enter a description")
    },
    {
        type: "input",
        message: "Please provide any installation instructions for your application:",
        name: "installation",
        default: "N/A",
    },
    {
        type: "input",
        message: "Please provide any information that will help others use your application:",
        name: "usage",
        default: "N/A",
    },
    {
        type: "list",
        message: "Please select one below. If not interested in licensing, select 'none':",
        name: "license",
        choices: ["MIT", "GPL v3", "Apache", "none"],
    },
    {
        type: "input",
        message: "Please provide guidelines for how to contribute to your application:",
        name: "contribution",
        default: "N/A",
    },
    {
        type: "input",
        message: "Please provide any testing instructions to assist users:",
        name: "testing",
        default: "N/A",
    },
    {
        type: "input",
        message: "Please provide your GitHub username (*required):",
        name: "github",
        validate: (input) => input ? true : console.log("Please enter your Github profile name"),
    },
    {
        type: "input",
        message: "Please provide a preferred email address (*required):",
        name: "email",
        validate: (input) => input ? true : console.log("Please enter your email address"),
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
        .then((response) => writeToFile("./Sample-readme/Template_README.md", response));
    };

// Function call to initialize app
init();
