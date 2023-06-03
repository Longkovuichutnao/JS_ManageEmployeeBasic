import { closeForm } from "../utils/Helper.js";
import { getInfor } from "../utils/Helper.js";

/**
 * GLOBAL ARRAY
 */
const listEmployee = [];

/**
 * display logIn form
 */
function displayAdddEmployee() {
    document.getElementById("form-login").style.display = "block";
    document.getElementById("btn-update").disabled = true;
}

document.getElementById("add-emp").onclick = displayAdddEmployee;
document.getElementById("btn-close").onclick = closeForm;




function displayList() {
    var resultList = "";
    listEmployee.forEach(employee => {
        var row = `<tr>
            <td>${employee.acc}</td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.password}</td>
            <td>${employee.date}</td>
            <td>${employee.salary}</td>
            <td>${employee.position}</td>
            <td>${employee.workTime}</td>
            <td>${employee.totalSalary}</td>
            <td>${employee.type}</td>
            <td>
                <button onclick="updateEmployee('${employee.acc}')" id="btn-startUpdate">
                    Update
                </button>
                <button onclick="removeEmployee('${employee.acc}')" id="btn-remove">
                    Delete
                </button>
            </td>
        </tr>`
        resultList += row;
    });
    document.getElementById("show-list").innerHTML = resultList;
}

/**
 * remove employee
 */
function removeEmployee(account) {
    var index;
    listEmployee.forEach(element => {
        if (element.getAcc() === account) {
            index = listEmployee.indexOf(element);
        }
    });
    listEmployee.slice(index, 1);
    alert("Delete successfully !");
}


/**
 * add new employee to array
 */
function addEmployee() {
    listEmployee.push(getInfor());
    alert("add succesfully !");
    displayList();
    setLocalStorage();
}

document.getElementById("btn-add").onclick = addEmployee;

function setLocalStorage() {
    localStorage.setItem("listEmployee", JSON.stringify(listEmployee));
}




