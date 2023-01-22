//Displaying current day at top of calendar
let today = moment().format('dddd, Do of MMMM YYYY');
$("#currentDay").html(today);