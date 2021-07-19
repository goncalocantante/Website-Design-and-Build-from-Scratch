

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  let title = document.getElementById("title")


  // let imgYoffset = document.querySelector('#wave').getBoundingClientRect().top// Y
  let imgYoffset = document.getElementById('wave').offsetTop;

  if (currentScrollPos > 500) {
    title.style.display = "none";
    console.log(imgYoffset + "---")
    console.log(currentScrollPos)
  } else{
    title.style.display = "block";
    console.log(imgYoffset + "---")
    console.log(currentScrollPos)
  }


  let wave = document.getElementById("wave")

  window.addEventListener('scroll', function(){
      var value = window.scrollY; 
      title.style.bottom = 50 + value*0.05 + "%"; 
      

  })


}