var AC = document.getElementById("ac"); //清除鍵
var del = document.getElementById("del"); //後退鍵
var btn_txt = document.getElementsByClassName("btn_txt"); //按鍵輸入到input
var dot = document.getElementsByClassName("dot"); //小數點
var txt = document.getElementsByClassName("txt")[0]; //輸入畫面
var displayinit = 0;



AC.onclick = function () {
    txt.value = '0';
}

del.onclick = function () {
    console.log(txt.value.length);
    if (txt.value.length == 1) {
        txt.value = "0";
    } else {
        txt.value = txt.value.substr(0, txt.value.length - 1);
    }
}

function numBtn(str) {
    if (displayinit == null) {
        txt.value = str;
        displayinit = 0;
        return;
    };

    if (txt.value == 0) {
        txt.value = str;
    } else {
        txt.value += str;
    }
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



// for (var i = 0; i < btn_txt.length; i++) {
//     btn_txt[i].onclick = function () {
//         console.log(txt.value);
//         if (txt.value == "" && this.value == ".") {
//             txt.value = "0.";
//         } else {
//             if (!isNaN(this.value) || this.value == ".") {
//                 if (txt.value.indexof(".") != -1) {
//                     // if (txt.value != (".")) {

//                     //     txt.value += this.value;
//                     // }
//                 } else {
//                     txt.value += this.value;
//                 }
//             } else {
//                 if (this.value != "=") {
//                     evalStrAry[evalStrAry.length] = txt.value;
//                     evalStrAry[evalStrAry.length] = this.value;
//                     txt.value = "";
//                 } else {
//                     evalStrAry[evalStrAry.length] = txt.value;
//                     txt.value = eval(evalStrAry.join(""));
//                     evalStrAry = [];
//                 }
//             }
//         }
//     }
// }