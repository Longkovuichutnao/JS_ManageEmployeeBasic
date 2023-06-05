import { REGEX_ACC } from "../constant/Const.js";
import { REGEX_NAME } from "../constant/Const.js";
import { listEmployee } from "../main/Main.js";
import { REGEX_EMAIL } from "../constant/Const.js";
import { REGEX_PASSWORD } from "../constant/Const.js";
/**
 * function to validate account of employee
 * 
 * @param {*} acc value of acc employee
 * @returns <code> true </code> if matches with the pattern, other wise is <code> false </code>
 */
export function checkAcc(acc) {
    return REGEX_ACC.test(acc);
}

/**
 * 
 * @param {*} name name of employee
 * @returns <code> true </code> if matches with the pattern, other wise is <code> false </code>
 */
export function checkName(name) {
    return REGEX_NAME.test(name);
}

export function checkAccExisted(acc) {
    return listEmployee.some(employee => employee.acc === acc);
}

export function checkEmail(email) {
    return REGEX_EMAIL.test(email);
}

export function checkPassword(password) {
    return REGEX_PASSWORD.test(password); 
}

/**
 * function to get current date with format YYYY-MM-DD
 * 
 * @returns current date
 */
function getCurrentDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    var day = date.getDate().toString().padStart(2, '0');
    return year + '-' + month + '-' + day;
}

/**
 * function to check valid date
 * 
 * @param {*} date date to check 
 * @returns <code> true </code> if is valid date, otherwise is <code> false </code>
 */
export function checkValidDate(date) {
    if (date == "") {
        return false;
    }
    if (date > getCurrentDate()) {
        return false;
    }
    return true;
}


/**
 * function to get valid number based on condition
 * 
 * @param {*} number number to check
 * @param {*} min    minimum value
 * @param {*} max    maximum value
 * @returns the valid value of number
 */
export function checkNumber(number, min, max) {
    if (number < min || number > max || number.length === 0) {
        return false;
    }
    return true;
}