window.onload=()=>{
  let song = document.getElementById("audio");
  song.play();
  song.loop=true;
    document.getElementsByClassName("home")[0].style.display = "block";
  document.getElementsByClassName("seasons")[0].style.display = "none";
    document.getElementsByClassName("real-characters")[0].style.display = "none";
    document.getElementsByClassName("productions")[0].style.display = "none";
    document.getElementsByClassName("shows1")[0].style.display = "none";
    document.getElementsByClassName("stars")[0].style.display = "none";

//   $(".home").show();
//   $(".seasons").sty;
//     $(".real-characters").hide();
//     $(".production").hide();
//     $(".shows1").hide();
//     $(".stars").hide();

}


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

function closeNav(){
  document.getElementsByClassName("right-menu")[0].style.width = "0%";
}
document.addEventListener('click', function(e) {
    var container = document.getElementById('rm');
    if (!container.contains(e.target)) {
        document.getElementsByClassName("right-menu")[0].style.width = "0%";
    }
});

