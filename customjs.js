/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 500) {
    document.getElementById("title").style.display = "none";
    console.log(currentScrollPos)
  } else{
    document.getElementById("title").style.display = "block";
    console.log(currentScrollPos)
  }
  if (currentScrollPos > 750) {
    $('.modal').modal('show'); 
  } else{
    $('.modal').modal('hide'); 
  }


}