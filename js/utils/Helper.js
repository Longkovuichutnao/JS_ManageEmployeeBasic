import { Employee } from "../entity/Employee.js";

/**
 * Function to close the form add or update employee
 * when click close button
 */
export function closeForm() {
    document.getElementById("form-login").style.display = "none";
}


/**
 * Function to get total salary based on position and salary
 * 
 * @param {*} position position of user
 * @param {*} salary   basic salary of user
 * @returns value of total salary
 */
function getTotalSalary(position, salary) {
    var totalSalary = 0;
    switch (position) {
        case "manager":
            totalSalary += salary * 3;
            break;
        case "Dmanager":
            totalSalary += salary * 2;
            break;
        case "employee":
            totalSalary += salary;
            break;
    }
    return totalSalary;
}

/**
 * Get the type of employee based on work time of their
 * 
 * @param {*} workTime time the employee worked
 * @returns the value of employee type
 */
function getType(workTime) {
    if (workTime >= 192) {
        return "Excellent";
    } else if (workTime >= 176) {
        return "Good";
    } else if (workTime >= 160) {
        return "Below good";
    } else {
        return "Average";
    }
}

/**
 * function to create new employee based on user inputed
 * 
 * @returns new employee object
 */
export function getInfor() {
    var acc = document.getElementById("input-acc").value;
    var name = document.getElementById("input-name").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value;
    var date = document.getElementById("input-date").value;
    var salary = Number(document.getElementById("input-salary").value);
    var position = document.getElementById("input-position").value;
    var workTime = Number(document.getElementById("input-time").value);
    var totalSalary = getTotalSalary(position, salary);
    var type = getType(workTime);
    
    //create employee
    var employee = new Employee(acc, name, email, password,
        date, salary, position, workTime, totalSalary, type);
    return employee;
}