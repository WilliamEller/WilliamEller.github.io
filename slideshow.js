var slideIndex = 1;

function slideChange(n){
    changeSlideTo(slideIndex += n);
};

function changeSlideTo(n){
    var i;
    var x = document.getElementsByClassName("slide");
    if(n>x.length){slideIndex=1};
    if(n < 1) {slideIndex=x.length};
    for(i=0; i<x.length;i++){
        x[i].style.display = "none";
    }
    x[slideIndex -1].style.display = "block";
}