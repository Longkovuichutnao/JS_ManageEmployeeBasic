import { closeForm } from "../utils/Helper.js";
import { getInfor } from "../utils/Helper.js";
/**
 * GLOBAL ARRAY
 */
export var listEmployee = [];

function setLocalStorage() {
    localStorage.setItem("listEmployee", JSON.stringify(listEmployee));
}

function getLocalStorage() {
    var dataLocal = JSON.parse(localStorage.getItem("listEmployee"));
    if (dataLocal != null) {
        displayListLocal(dataLocal);
        listEmployee = dataLocal;
    }
}

getLocalStorage();
function displayListLocal(dataLocal) {
    var resultListLocal = "";
    dataLocal.map(function (employee) {
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
                <button onclick="displayToUpdate('${employee.acc}')" id="btn-startUpdate">
                    Update
                </button>
                <button onclick="removeEmployee('${employee.acc}')" id="btn-remove">
                    Delete
                </button>
            </td>
        </tr>`;
        resultListLocal += row;
    });
    document.getElementById("show-list").innerHTML = resultListLocal;
}



/**
 * reset form
 */

function resetForm() {
    document.getElementById("form-login").reset();
}

/**
 * display logIn form
 */
function displayAdddEmployee() {
    resetForm();
    const errorMessages = document.getElementsByClassName('red-warning');
    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].style.display = "none";
    }
    document.getElementById("form-login").style.display = "block";
    document.getElementById("btn-update").disabled = true;
}

document.getElementById("add-emp").onclick = displayAdddEmployee;
document.getElementById("btn-close").onclick = closeForm;


function displayList() {
    let resultList = "";
    listEmployee.map(function (employee) {
        let row = `<tr>
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
                <button onclick="displayToUpdate('${employee.acc}')" id="btn-startUpdate">
                    Update
                </button>
                <button onclick="removeEmployee('${employee.acc}')" id="btn-remove">
                    Delete
                </button>
            </td>
        </tr>`;
        resultList += row;
    });
    document.getElementById("show-list").innerHTML = resultList;
}


function displayToUpdate(account) {
    resetForm();
    displayAdddEmployee();
    document.getElementById("btn-update").disabled = false;
    document.getElementById("btn-add").disabled = true;
    document.getElementById("btn-update").onclick = function updateEmployee() {
        let index;
        listEmployee.forEach(element => {
            if (element.acc === account) {
                index = listEmployee.indexOf(element);
            }
        });
        if (getInfor() != null) {
            listEmployee[index] = getInfor();
            alert("Update succesfully !");
            setLocalStorage();
            displayList();
        } else {
            alert("NOTE: to update the student must input correct form !");
        }
    }
}
window.displayToUpdate = displayToUpdate;

/**
 * remove the employee out of list
 * @param {*} account value of unique key of object
 */
function removeEmployee(account) {
    let index;
    listEmployee.forEach(element => {
        if (element.acc === account) {
            index = listEmployee.indexOf(element);
        }
    });
    listEmployee.splice(index, 1);
    alert("Delete successfully !");
    setLocalStorage();
    displayList();
}

window.removeEmployee = removeEmployee;


/**
 * add new employee to array
 */
function addEmployee() {
    if (getInfor() != null) {
        listEmployee.push(getInfor());
        alert("add succesfully !");
        displayList();
        setLocalStorage();
    } else {
        alert("NOTE: to add employee must input correct form !!!");
    }
}

document.getElementById("btn-add").onclick = addEmployee;


function displayFound (listFound) {
    let resultList = "";
    listFound.map(function (employee) {
        let row = `<tr>
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
                <button onclick="displayToUpdate('${employee.acc}')" id="btn-startUpdate">
                    Update
                </button>
                <button onclick="removeEmployee('${employee.acc}')" id="btn-remove">
                    Delete
                </button>
            </td>
        </tr>`;
        resultList += row;
    });
    document.getElementById("show-list").innerHTML = resultList;
}

let search = () => {
    const searchValue = document.getElementById("find-type").value.toUpperCase();
    let listFound = listEmployee.filter(function (employee) {
        return employee.type.toUpperCase().includes(searchValue);
    });
    displayFound(listFound);
}
window.search = search;
//thuc ra cai nay khong can thiet trong bai nay lam, nhung ma em thay tren youtube ngoai vua search vua hien ra thi
//no con co 1 icon tim kiem o ben canh nen em cho vao cho dep mat thoi a.
document.getElementById("find-type-icon").onclick = search;
