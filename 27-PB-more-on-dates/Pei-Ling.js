// D-3 How many days remain?

// Create a function that accepts a date object as an argument and calculates how many days remain until the end of the month. The function should return the number of days.

`use strict`;

const today = new Date();
const toDate= today.getDate();
console.log(toDate);

const remainingDaysOfMonth = (days) => {
    days = 30;
    return days - toDate;
}
remainingDaysOfMonth();

/* 
<script> 
var up = document.getElementById('GFG_UP'); 
  
up.innerHTML = "Click on button to get the" 
    + " number of days in specified month"; 
      
var down = document.getElementById('GFG_DOWN');  
  
function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate(); 
} 
  
function GFG_Fun() { 
    var date = new Date(); 
    var month = 2; 
    var year = 2020; 
    down.innerHTML = "Number of days in " + month 
                 + "nd month of the year " + year 
                 +" is "+ daysInMonth(month, year); 
} 
</script>   */