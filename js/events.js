//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  });  
}

function frameIt() {
  $('img').on("load", function() {
    console.log("HELLO FROM FRAME IT")
    alert("HELLO FROM FRAME IT")
    $(this).addClass("tasty")
  });
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
      if (key.which == 71) {
        alert("You pressed the G key. Very wonderful job, good.")
      }
  });
}

function submitIt() {
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.")
  });
}

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()
  
  $('img').addClass("tasty")

});
