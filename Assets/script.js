$(document).ready(function () {
  // Current Date & Time
  var todayDate = moment().format("dddd, MMM Do YYYY LT");
  $("#currentDay").html(todayDate);

  // Save Button event listener
  $(".saveBtn").on("click", function () {
    //get nearby values
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //save text in local storage
    localStorage.setItem(time, text);
  });

  //retrieve saved text from LocalStorage
  $("#nine .description").val(localStorage.getItem("nine"));
  $("#ten .description").val(localStorage.getItem("ten"));
  $("#eleven .description").val(localStorage.getItem("eleven"));
  $("#twelve .description").val(localStorage.getItem("twelve"));
  $("#one .description").val(localStorage.getItem("one"));
  $("#two .description").val(localStorage.getItem("two"));
  $("#three .description").val(localStorage.getItem("three"));
  $("#four .description").val(localStorage.getItem("four"));
  $("#five .description").val(localStorage.getItem("five"));

  function timeTracker() {
    //get current hour
    var currentHour = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      //compare time
      if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } 
      else if (timeBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } 
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }
  // re-run function
  timeTracker();
});
