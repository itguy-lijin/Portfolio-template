// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    // document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close(target) {
    document.getElementById("mySidebar").style.display = "none";
    var elem = document.getElementById(target);
    elem.scrollIntoView({behavior: 'smooth'});
}

var slideIndex = 1;
(function () {
    var i;
    var x = document.getElementsByClassName("slides");
    var p = document.getElementsByClassName("paginations");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < p.length; i++) {
        p[i].className = p[i].className.replace("w3-black", "w3-hover-black");  
    }
    x[slideIndex-1].style.display = "block";  
    p[slideIndex-1].className = p[slideIndex-1].className.replace("w3-hover-black", "w3-black");
    var elem = document.getElementById("about");
    elem.scrollIntoView({behavior: 'smooth'});
})();

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slides");
    var p = document.getElementsByClassName("paginations");
    slideIndex = n;
    if (n > x.length) {slideIndex = 1;}
    if (n < 1) {slideIndex = x.length;}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < p.length; i++) {
        p[i].className = p[i].className.replace("w3-black", "w3-hover-black");  
    }
    x[slideIndex-1].style.display = "block";  
    p[slideIndex-1].className = p[slideIndex-1].className.replace("w3-hover-black", "w3-black");
    var elem = document.getElementById("portfolio");
    elem.scrollIntoView({behavior: 'smooth'});
}

function sendMail() {
    // var name = $("#Name").val();
    var title = $("#Title").val();
    var message = $("#Message").val();
    console.log(message);
    if(title != "" && message != "") {
        window.open("mailto:jinwangdev531@gmail.com?subject=" + title + "&body=" + message);
    }
}