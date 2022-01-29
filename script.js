$(document).ready(function () {
  
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function () {
      
        console.log(this);
        var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
        var time = $(this).parent().attr("id"); 

    
        localStorage.setItem(time, text);
    })


  
})