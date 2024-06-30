#! /usr/bin/env node
import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new person();
const programStart = async (persons) => {
    do {
        console.log("Welcome!");
        const ans = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                message: "whom would you like to interact with?",
                choices: ["staff", "student", "exit"],
            },
        ]);
        if (ans.select == "staff") {
            console.log("you approach the staff room. please feel free to ask any question");
        }
        else if (ans.select == "student") {
            const ans = await inquirer.prompt([
                {
                    name: "student",
                    type: "input",
                    message: "Enter the student's name you wish to engage with:",
                },
            ]);
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}. Nice to met you!`);
                console.log("New student added");
                console.log("current student list");
                console.log(persons.students);
            }
            else {
                console.log(`Hello i am ${student.name}. Nice to see you again!`);
                console.log("Exiting student list:");
                console.log(persons.students);
            }
        }
        else if (ans.select == "exit") {
            console.log("Existing the program...");
            process.exit();
        }
    } while (true);
};
programStart(persons);
