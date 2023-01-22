//Displaying current day at top of calendar
let today = moment().format('dddd, Do of MMMM YYYY');
$("#currentDay").html(today);

//Iterate on Timeblocks to asign a background color
let now = moment().hours();
$("div.time-block").each(function(index) {
    let dataTime = $(this).attr("data-time");
    if (now < dataTime) { //it is early. Future assigned to time block
        $(this).addClass("future");
    } else if (now == dataTime) { //Same time. Present assigned to time block
        $(this).addClass("present");
    } else { //Time passed. Grey assigned
        $(this).addClass("past");
    }
});