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
var clickedDataTime = ""
//Listener for the click event
// $("div.description").one("click",function(){
//     var clickedDataTime = $(this).parent().attr("data-time"); //Finding parent Time Block
//     $(document).keypress(function(e) {   //Listening to the keyboard
//             // Writting to the child class 'description'
//             $(`div.time-block[data-time='${clickedDataTime}']`).children('.description').append(e.originalEvent.key);
//   });
// });



$("div.description").one("click",function(){

    clickedDataTime = $(this).attr("data-time"); //Finding Time Block
    console.log(this)
    console.log(clickedDataTime)
    console.log(typeof clickedDataTime)

    $(document).keydown(function(e) {   //Listening to the keyboard
            // Writting to the child class 'description'
            $(`div.description[data-time='${clickedDataTime}']`).append(e.originalEvent.key);
            console.log(e)

        
            console.log(e.originalEvent.key)

  });
});