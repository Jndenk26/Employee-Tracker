INSERT INTO department (name)
VALUES ("accounting"), ("marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("accountant", 70000, 1), ("marketer", 40000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 1, null);

-- create insert for managers, then change from null
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ("Jim", "Halpert", 1, null);




       