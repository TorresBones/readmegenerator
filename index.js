// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("../readmegenerator/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Provide a relative path to the image you want to use as your screenshot.",
    },
    {
        type: "input",
        name: "link",
        message: "Provide a link of your deployed aplication.",
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license applicable to the project.",
        choices: ["MIT", "", "", "",],
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project.",
    },
    {
        type: "input",
        name: "creator",
        message: "Write your Github Username.",
    },
    {
        type: "input",
        name: "email",
        message: "Provide your email address.",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of require test if applicable.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional ReadMe File...");
        writeToFile("./dist/README.md", generateMarkdown({...responses}));
    })
}

// Function call to initialize app
init();
