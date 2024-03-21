const isWeekday = true;
const airConditioning = !true;
const air = document.getElementById("air");

console.log("Weekday");
console.log(isWeekday);
console.log("Air conditioning");
console.log(airConditioning);

// if (isWeekday) {
//     air.innerHTML = "AC up and running";
// } else {
//     air.innerHTML = "AC will be turned off"
// }

(isWeekday) 
? air.innerHTML = "ON"
: air.innerHTML = "OFF";


