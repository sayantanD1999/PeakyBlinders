window.onload=()=>{
  let song = document.getElementById("audio");
  song.play();
  song.loop=true;
}

$(document).ready(function(){
  $('.seasons').css('display','none');
  $('.real-characters').css('display','none');
  $('.production').css('display','none');
  $('.shows1').css('display','none');
  $('.stars').css('display','none');
  $('.home').css('display','block');
});

$(document).ready(function () {
  $("button#home").click(function () {
    $(".seasons").hide();
    $(".real-characters").hide();
    $(".production").hide();
    $(".shows1").hide();
    $(".stars").hide();
  });
});
$(document).ready(function () {
  $("button#starbut").click(function () {
    $(".seasons").hide();
    $(".real-characters").hide();
    $(".production").hide();
    $(".shows1").hide();
    $(".stars").toggle(500);
  });
});

$(document).ready(function () {
  $("button#seabut").click(function () {
    $(".stars").hide();
    $(".real-characters").hide();
    $(".production").hide();
    $(".shows1").hide();
    $(".seasons").toggle(500);
  });
});

$(document).ready(function () {
  $("button#probut").click(function () {
    $(".seasons").hide();
    $(".real-characters").hide();
    $(".stars").hide();
    $(".shows1").hide();
    $(".production").toggle(500);
  });
});

$(document).ready(function () {
  $("button#rc").click(function () {
    $(".seasons").hide();
    $(".production").hide();
    $(".stars").hide();
    $(".shows1").hide();
    $(".real-characters").toggle(500);
  });
});

$(document).ready(function () {
  $("button#s1").click(function () {

    $(".shows1").slideToggle(500);
  });
});
$(document).ready(function () {
  $("button#s2").click(function () {
    $(".shows2").slideToggle(500);
  });
});

function showNav() {
  document.getElementsByClassName("right-menu")[0].style.width = "60%";
}

document.addEventListener('mouseup', function(e) {
  var container = document.getElementById('rm');
  if (!container.contains(e.target) || container.contains(e.target) ) {
    document.getElementsByClassName("right-menu")[0].style.width = "0%";  }
});
