var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var x = document.getElementsByClassName('about-img');
    
    if(n > x.length) {
        slideIndex = 1;
    } else if(n<1){
        slideIndex = x.length;
    }
    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000)

function validateForm(contactUs) {
    var name = document.forms["contactUs"]["name"].value;
    var email = document.forms["contactUs"]["email"].value;
    var interest = document.forms["contactUs"]["interest"].value;

    if (name == "" || email == "" || interest == "") {
        alert("Input required!");
        return false;
    }
}