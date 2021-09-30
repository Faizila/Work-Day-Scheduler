$(document).ready(function () {
  // Current Date & Time
  var todayDate = moment().format("dddd, MMM Do YYYY LT");
  $("#currentDay").html(todayDate);
  // save button eventListener
  $(".saveBtn").on("click", function () {
    // Get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save value in local storage
    localStorage.setItem(time, value);
  });

  function timeTracker() {
    //get the current hour
    var currentHour = moment().hour();
    //Loop
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);
      console.log(timeBlock);
      //Add classes for color indicator
      if (timeBlock < currentHour) {
        $(this).addClass("past");
      } else if (timeBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  timeTracker();
  var interval = setInterval(timeTracker, 15000);

  // Get item from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
$("#currentDay").text(moment().format("dddd, MMMM Do"));
