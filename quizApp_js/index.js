let readLineSync = require("readline-sync")

/** Creating data set */
const dataBase = {
    data : [
        {
            question: `Let a = {}, b = {}
console.log(a == b)
console.log(a === b)`,
            options: {
                a: "false false",
                b: "false true",
                c: "true false",
                d: "true true"
            },
            correctAnswere : "a"
        },
        {
            question: "Object.assign(target, source) creates which type of copy?",
            options: {
                a: "Deep Copy",
                b: "Shallow Copy",
                c: "Nested Copy",
                d: "Creates a new reference"
            },
            correctAnswere: "b"
        },
        {
            question: "Is method chaining possible with forEach?",
            options:{
                a: "Yes",
                b: "No"
            },
            correctAnswere: "b"
        }
    ]
};

/** Function to display questions and get user answer */
function showQuestionAndOptions() {
    for (let i = 0; i < dataBase.data.length; i++) {
        console.log(`Q${i + 1}: ${dataBase.data[i].question}\n`);

        for (let key in dataBase.data[i].options) {
            console.log(`${key}: ${dataBase.data[i].options[key]}`);
        }
        console.log("Prompting user for answer...");
        // Ask for user's answer
        let userAnswer = readLineSync.question("Enter your answer (a/b/c/d): ");
        
        // Validate answer
        if (userAnswer.toLowerCase() === dataBase.data[i].correctAnswere.toLowerCase()) {
            console.log("Correct!\n");
        } else {
            console.log(`Wrong! The correct answer is: ${dataBase.data[i].correctAnswere}\n`);
        }
    }
}

showQuestionAndOptions();
