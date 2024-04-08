#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Todos = [];
while (true) {
    let To_dostask = await inquirer.prompt([
        {
            name: "todo_ques",
            type: "input",
            message: "What would you like to add in your Todos list?"
        },
        {
            name: "addmore_task",
            type: 'list',
            choices: ["yes", "no"],
            message: "Do you want to add more tasks in your todos list?",
        }
    ]);
    const { todo_ques, addmore_task } = To_dostask;
    Todos.push(To_dostask.todo_ques);
    if (addmore_task === "no") {
        console.log(chalk.bgGreen.italic("My Todos list:"));
        for (let i = 0; i <= Todos.length; i++) {
            console.log(Todos[i]);
        }
        break;
    }
    
}
// console.log(chalk.bgMagentaBright.yellow(Todos));
    // state= To_dostask.addmore_task;