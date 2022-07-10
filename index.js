const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');

const OUTPUT = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT, 'team.html');

const team = [];

// Prompt user
function employeeInformation() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What type of employee would you like to input',
        name: 'name',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
    ])
    .then(val => {
      if (val.name === 'Manager') {
        managerInformation();
      } else if (val.name === 'Engineer') {
        engineerInformation();
      } else if (val.name === 'Intern') {
        internInformation();
      }
    });
} // end of function

// Prompt to collect information on manager and then go back to enter a new employee
function managerInformation() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: "what is your manager's name?",
        name: 'name',
      },
      {
        type: 'input',
        message: "What is your manager's id",
        name: 'id',
      },
      {
        type: 'input',
        message: "What is your manager's email?",
        name: 'email',
      },
      {
        type: 'input',
        message: "What is your manager's office number",
        name: 'number',
      },
    ])
    .then(function (answer) {
      let manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.number
      );
      team.push(manager);

      employeeInformation();
    });
} // end of function

// Calls function to begin prompts
employeeInformation();
