// slideshow-Selection, portfolio section

var Index = 1;
Slides(Index);

// Next/previous controls
function plusSlides(n) {
    Slides(Index += n);
}

// Thumbnail image controls
function currentSlide(n) {
    Slides(Index = n);
}

function Slides(n) {
    var i;
    var slite = document.getElementsByClassName("myslide");
    var dots = document.getElementsByClassName("dot");
    if (n > slite.length) { Index = 1 }
    if (n < 1) { Index = slite.length }
    for (i = 0; i < slite.length; i++) {
        slite[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slite[Index - 1].style.display = "block";
    dots[Index - 1].className += " active";
}
