import { Employee } from "../entity/Employee.js";
import { checkAcc } from "./Validation.js";
import { checkName } from "./Validation.js";
import { checkAccExisted } from "./Validation.js";
import { checkEmail } from "./Validation.js";
import { checkPassword } from "./Validation.js";
import { checkValidDate } from "./Validation.js";
import { checkNumber } from "./Validation.js";

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
 * 
 * @returns new employee object
 * if the employee has <strong>one infor wrong validate </strong>
 * the flag is upper.
 *  <br> if the flag equals 0, returns new object of employee,
 * other wise returns null.
 */
export function getInfor() {
    var flag = 0;
    //check validate and get value of account
    var acc = document.getElementById("input-acc").value;
    if (!checkAcc(acc)) {
        document.getElementById("mess-err-acc").style.display = "block";
        flag++;
    } else if (checkAccExisted(acc)) {
        document.getElementById("mess-err-acc-existed").style.display = "block";
        flag++;
    } else {
        document.getElementById("mess-err-acc").style.display = "none";
        document.getElementById("mess-err-acc-existed").style.display = "none";
    }

    //check validate and get value of name
    var name = document.getElementById("input-name").value;
    if (!checkName(name)) {
        document.getElementById("mess-err-name").style.display = "block";
        flag++;
    } else {
        document.getElementById("mess-err-name").style.display = "none";
    }

    //check validate and get value of email
    var email = document.getElementById("input-email").value;
    if (!checkEmail(email)) {
        document.getElementById("mess-err-email").style.display = "block";
        flag++;
    } else {
        document.getElementById("mess-err-email").style.display = "none";
    }

    //check validate and get value of password
    var password = document.getElementById("input-password").value;
    if (!checkPassword(password)) {
        document.getElementById("mess-err-password").style.display = "block";
        flag++;
    } else {
        document.getElementById("mess-err-password").style.display = "none";
    }

    //check validate and get value of date
    var date = document.getElementById("input-date").value;
    if (!checkValidDate(date)) {
        document.getElementById("mess-err-date").style.display = "block";
        flag++;
    } else {
        document.getElementById("mess-err-date").style.display = "none";
    }

    //check validate and get value of salary
    var salary = Number(document.getElementById("input-salary").value);
    if (!checkNumber(salary, 1000000, 20000000)) {
        document.getElementById("mess-err-salary").style.display = "block";
        flag++;
    } else {
        document.getElementById("mess-err-salary").style.display = "none";
    }

    //check validate and get value of postion
    var position = document.getElementById("input-position").value;
    if (position == "null") {
        document.getElementById("mess-err-position").style.display = "block";
        flag++;
    } else {
        document.getElementById("mess-err-position").style.display = "none";
    }

    //check validate and get value of  work time
    var workTime = Number(document.getElementById("input-time").value);
    if (!checkNumber(workTime, 80, 200)) {
        document.getElementById("mess-err-time").style.display = "block";
        flag++;
    } else {
        document.getElementById("mess-err-time").style.display = "none";
    }
    
    /**
     * check the employee has already valid format validate before
     */
    let employee;
    if (flag == 0) {
        var totalSalary = getTotalSalary(position, salary);
        var type = getType(workTime);
        //create employee
        employee = new Employee(acc, name, email, password,
                                    date, salary, position,
                                     workTime, totalSalary, type);
    } else {
        employee == null;
    }
    return employee;
}