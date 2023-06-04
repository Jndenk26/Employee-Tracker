const inquirer = require('inquirer');
const mysql = require("mysql2")

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'password',
    database: 'registrar_db'
  },
  console.log(`Connected to the classlist_db database.`)
);

// Query database
// db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);
// });


inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'task',
      choices: ["View all departments", "View all roles", "View all employees", "Add a department"]
    },
  ])
  .then((response) => {
  if (response.task === "View all departments") {
    db.query('SELECT * FROM department', function (err, results) {
      console.table(results);
    });
  }
  console.log(response)
  });