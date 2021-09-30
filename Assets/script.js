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
              var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
  
              //Add classes for color indicator
              if (timeBlock < currentHour) {
                  $(this).addClass("past");
                  $(this).removeClass("present");
                  $(this).removeClass("future");               
              } else if (timeBlock > currentHour) {
                  $(this).removeClass("past");
                  $(this).addClass("present");
                  $(this).removeClass("future");
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
   $("#nine .description").val(localStorage.getItem("nine"));
   $("#ten .description").val(localStorage.getItem("ten"));
   $("#eleven .description").val(localStorage.getItem("eleven"));
   $("#twelve .description").val(localStorage.getItem("twelve"));
   $("#one .description").val(localStorage.getItem("one"));
   $("#two .description").val(localStorage.getItem("two"));
   $("#three .description").val(localStorage.getItem("three"));
   $("#four .description").val(localStorage.getItem("four"));
   $("#five .description").val(localStorage.getItem("five"));
  
  });