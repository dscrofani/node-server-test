const button = document.querySelector("#talk-back-button");
const unameField = document.querySelector("#uname-field");
const passField = document.querySelector("#pass-field");
button.addEventListener('click',talkBack);

function talkBack(){
    var uname = unameField.value;
    var pass = passField.value;
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("POST", "/talkback");
    req.setRequestHeader("Content-Type", "application/json");
    var data = {"user":uname, "password":pass};
    req.send(JSON.stringify(data));
}

function reqListener(){
    console.log(this.responseText);
}