

function showBurger() {
    
    document.getElementById("imgB").style.display = "none"; 
    document.getElementById("imgC").style.display = "none"; 
    document.getElementById("imgD").style.display = "none"; 
    document.getElementById("imgE").style.display = "none"; 
    document.getElementById("imgF").style.display = "none"; 
    
    let img = document.getElementById("imgA");
    img.style.display = "block";
}

function showPatty() {

    document.getElementById("imgA").style.display = "none"; 
    document.getElementById("imgC").style.display = "none"; 
    document.getElementById("imgD").style.display = "none"; 
    document.getElementById("imgE").style.display = "none"; 
    document.getElementById("imgF").style.display = "none"; 

    let img = document.getElementById("imgB");
    img.style.display = "block";
}

function showLatus() {

    document.getElementById("imgA").style.display = "none"; 
    document.getElementById("imgB").style.display = "none"; 
    document.getElementById("imgD").style.display = "none"; 
    document.getElementById("imgE").style.display = "none"; 
    document.getElementById("imgF").style.display = "none";

    let img = document.getElementById("imgC");
    img.style.display = "block";
}
function showSalads() {

    document.getElementById("imgA").style.display = "none"; 
    document.getElementById("imgB").style.display = "none"; 
    document.getElementById("imgC").style.display = "none"; 
    document.getElementById("imgE").style.display = "none"; 
    document.getElementById("imgF").style.display = "none";

    let img = document.getElementById("imgD");
    img.style.display = "block";
}
function showSauces() {

    document.getElementById("imgA").style.display = "none"; 
    document.getElementById("imgB").style.display = "none"; 
    document.getElementById("imgC").style.display = "none"; 
    document.getElementById("imgD").style.display = "none"; 
    document.getElementById("imgF").style.display = "none"; 

    let img = document.getElementById("imgE");
    img.style.display = "block";
}
function showBite() {

    document.getElementById("imgA").style.display = "none"; 
    document.getElementById("imgB").style.display = "none"; 
    document.getElementById("imgC").style.display = "none"; 
    document.getElementById("imgD").style.display = "none"; 
    document.getElementById("imgE").style.display = "none"; 

    let img = document.getElementById("imgF");
    img.style.display = "block";
}

// barger part end

function lightOff(){
    document.getElementById("imgN").style.display = "none"; 

    let img = document.getElementById("imgX");
    img.style.display = "block";
}
function lightOn(){
    document.getElementById("imgX").style.display = "none"; 

    let img = document.getElementById("imgN");
    img.style.display = "block";
}

// light end

function sunRise(){
    document.getElementById("sunS").style.display = "none";

    let img = document.getElementById("sunR");
    img.style.display = "block";
}
function sunSet(){
    document.getElementById("sunR").style.display = "none";

    let img = document.getElementById("sunS");
    img.style.display = "block";
}