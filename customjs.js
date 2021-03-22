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

  let title = document.getElementById("title")
  let wave = document.getElementById("wave")

  window.addEventListener('scroll', function(){
      var value = window.scrollY; 
      title.style.bottom = 50 + value*0.05 + "%"; 
      

  })


  /*
  if (currentScrollPos > 750) {
    $('.modal').modal('show'); 
  } else{
    $('.modal').modal('hide'); 
  }*/
}