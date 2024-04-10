#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Todos = [];
let state = true; //condition is true
console.log("\n\n\t\tchalk.(WELCOME TO MY TODO LIST APP:");
while (state) {
    let To_dostask = await inquirer.prompt([
        {
            name: "todo_ques1",
            type: "input",
            message: "What would you like to add in your Todos list?"
        }
    ]);
    Todos.push(To_dostask.todo_ques1);
    console.log(chalk.bgGreen.blue(`${To_dostask.todo_ques1}Task added successfully.`));
    let addmore_task = await inquirer.prompt([
        {
            name: "addmoretaskques2",
            type: "confirm",
            message: "Do you want to add more tasks in your todos list?",
            default: false
        }
    ]);
    state = addmore_task.addmoretaskques2;
}
console.log(chalk.bgMagentaBright.italic.cyanBright(Todos));
