export function Employee(acc, name, email,
        password, date, salary,
        position, workTime, totalSalary, type) {

        this.acc = acc;
        this.name = name;
        this.email = email;
        this.password = password;
        this.date = date;
        this.salary = salary;
        this.position = position;
        this.workTime = workTime;
        this.totalSalary = totalSalary;
        this.type = type;

        this.getAcc = function () {
                return this.acc;
        }
}