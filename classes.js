/* Problem Number 1 */
class Employee {
    constructor(employeename, employeeid, employeepermissions, storenumber){
        this.employeename = employeename;
        this.employeeid = employeeid;
        this.permissions = employeepermissions;
        this.storenumber = storenumber;
    }
}
/* Problem Number 2 */
class Manager extends Employee {
    constructor(employeename, employeeid, employeepermissions, storenumber, employeelist){
        super(employeename,employeeid,employeepermissions,storenumber);
        this.employeelist = [];
            addnewemployee = function (employeename){
                this.employeelist.push(employeename);
                return employeelist;
            }
        }
        changepermissions() {
            return this.employeename + "has a new access right: " + this.permissions;


        }
    
}
/* Problem Number 3 */
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin,est,sw,den,nor] = countries;
/* Problem Number 4 */
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}

const {width, height, area, perimeter } = rectangle;
console.log("width: ", width);
console.log("height: ", height);
console.log("area: ", area);
console.log("perimeter: ", perimeter);


document.getElementById('width').innerText =("Width: " + width);
document.getElementById('height').innerText =("Height: " + height);
document.getElementById('area').innerText =("Area: " + area);
document.getElementById('perimeter').innerText =("Perimeter: " + perimeter);

/* Problem Number 5 */
const evens = [0,2,4,6,8,10];
document.getElementById('evenarray').innerText = "Even Array: " + evens;
const odds = [1,3,5,7,9];
document.getElementById('oddarray').innerText = "Odd Array: " + odds;
const allnumbers = [...evens, ...odds];

console.log("all numbers: ", allnumbers);

const newarray = allnumbers.map(x => x);

console.log("New Array: ", newarray);

document.getElementById('newarray').innerText = "Both Arrays Together: " + newarray;
const sortarray = newarray.sort((a,b)=> a-b);
document.getElementById('sortedarray').innerText = "Sorted Array: " + sortarray;
