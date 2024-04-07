import inquirer from "inquirer";
let Todos = [];
let state = true; //condition
while (state) {
    let To_dostask = await inquirer.prompt([
        {
            name: "todo_ques",
            type: "input",
            message: "What would you like to add in your Todos list?"
        },
        {
            name: "addmore_task/2ndques",
            type: "confirm",
            message: "Do you want to add more tasks in your todos list?",
            default: "false"
        }
    ]);
    Todos.push(To_dostask.todo_ques);
    console.log(Todos);
    state = To_dostask.addmore_task;
}
