//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  });  
}

function frameIt() {
  $('img').on("load", function() {
    /* Can't seem to get this to work. frameIt() is called from document.ready() once all of the images have already been loaded. So...the load event is not triggered.
    */
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
