"use strict"

//DARK MODE

let htmlElementStyle = document.querySelector("html").style;
let darkModeButton = document.querySelector("input");
let darkHeaderColor = "#000000";
let darkMainColor = "#0a1e25";
let darkFooterColor = "#08141a";
let lightTextColor = "#f1eee5";
let darkTextColor = "#000000";

function DarkMode(){
    let dmBool = darkModeButton.checked;
    InvertText(dmBool);
    InvertBackGround(dmBool);
    InvertItems(dmBool);
}

function InvertText(dmBool){
    if(dmBool){
        htmlElementStyle.color = lightTextColor;
    }
    else{
        htmlElementStyle.color = darkTextColor;
    }
}

function InvertBackGround(dmBool){
    let headerBg = document.querySelector("header");
    let mainBg = document.querySelector("main");
    let footerBg = document.querySelector("footer");
    if(dmBool){
        headerBg.style.backgroundColor = darkHeaderColor;
        mainBg.style.backgroundColor = darkMainColor;
        footerBg.style.backgroundColor = darkFooterColor;
    }
    else{
        headerBg.style.backgroundColor = "#AAE888";
        mainBg.style.backgroundColor = "#FFFFFF";
        footerBg.style.backgroundColor = "#AAE888";
    }
}

function InvertItems(dmBool){
    let bars = document.querySelectorAll(".bar");
    if(dmBool){
        bars.forEach((element =>
            element.style.backgroundColor = "#FFFFFF"
            ));
    }
    else{
        bars.forEach((element =>
            element.style.backgroundColor = "#000000"
            ));
    }
}

darkModeButton.addEventListener("change", DarkMode);

//MENU BURGER

let menuBurger = document.querySelector(".burger-nav");
let tmOpen = false;

function toggleMenu(){
    if(tmOpen){
        tmOpen = false;
        menuBurger.style.display = "none";
    }
    else{
        tmOpen = true;
        menuBurger.style.display = "flex";
    }
}

//FORMULAIRE

class Individu{
    
    name;
    email;
    password;
    emissary;
    level;
    region;
}

let body = document.body;
let sendButton = body.querySelector("#send");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
let emailElement;
let passwordElement;
let passwordOK = false;
let emailOK = false;

function onSumbitForm(e){
    e.preventDefault();
    let personne = new Individu;
    personne.name = document.querySelector("#name").value;
    emailElement = document.querySelector("#email");
    passwordElement = document.querySelector("#password");
    if(emailRegex.test(emailElement.value)){
        emailElement.style.backgroundColor = "#FFFFFF";
        personne.email = emailElement.value;
        emailOK = true;
    }
    else{
        emailElement.style.backgroundColor = "#FF0000";
        
    }
    if(passwordRegex.test(passwordElement.value)){
        passwordElement.style.backgroundColor = "#FFFFFF";
        personne.password = passwordElement.value;
        passwordOK = true;
    }
    else{
        passwordElement.style.backgroundColor = "#FF0000";
    }
    let inputs = document.querySelectorAll("input");
    inputs.forEach(function (input) {
        if(input.name == "emissary"){
            if(input.checked == true){
                personne.emissary = input.value;
            }
        }
        if(input.name == "level"){
            if(input.checked == true){
                personne.level = input.value;
            }
        }
    });
    personne.region = document.querySelector("#region").value;
    console.log(personne);
    if(emailOK && passwordOK && name != "" && emissary != null && level != null){
        document.querySelector("#formulaire").sumbit();
    }
}

sendButton.addEventListener("click", onSumbitForm);