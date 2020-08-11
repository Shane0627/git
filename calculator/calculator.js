var AC = document.getElementById("ac"); //清除鍵
var del = document.getElementById("del"); //後退鍵
var dot = document.getElementsByClassName("dot")[0]; //小數點
var txt = document.getElementsByClassName("txt")[0]; //輸入畫面
var displayinit = 0;

AC.onclick = function () {
    txt.value = 0;
    valueQ = 0;
}

del.onclick = function () {
    // console.log(txt.value.length);
    if (txt.value.length == 1) {
        txt.value = "0";
    } else {
        txt.value = txt.value.substr(0, txt.value.length - 1);
    }
}

dot.onclick = function(){
    if(txt.value += dot.value){
        // console.log(txt.value);
        dot.disabled = true;
    }else{
        dot.enabled = true;
    }
}

function numBtn(str) {
    if (displayinit == null) {
        txt.value = str;
        displayinit = 0;
        // return;
    };

    if (txt.value == 0) {
        txt.value = str;
    } else {
        txt.value += str;
    }
    console.log(str);
}

function operBtn(str) {
    equal();
    valueQ = txt.value;
    displayinit = str;
    txt.value = 0;
}

function equal() {

    switch (displayinit) {
        case '+':
            txt.value = parseFloat(valueQ) + parseFloat(txt.value);
            break;
        case '-':
            txt.value = parseFloat(valueQ) - parseFloat(txt.value);
            break;
        case 'x':
            txt.value = parseFloat(valueQ) * parseFloat(txt.value);
            break;
        case '/':
            txt.value = parseFloat(valueQ) / parseFloat(txt.value);
            break;
        default:
            break;
    }
}