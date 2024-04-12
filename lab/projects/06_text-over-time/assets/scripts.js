const dayList = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

// Get Elements
// -----------------------------------------------------------
var dateObject = new Date();
var day =  dayList[dateObject.getDay()];
console.log('day:',day);

// Get Day
// -----------------------------------------------------------

var dayElement = document.querySelector('.day');
console.log('dayElement:',dayElement);

dayElement.innerHTML = day;
