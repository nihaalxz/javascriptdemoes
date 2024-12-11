function text_length() {
    var container = document.querySelector(".container");
    let text = document.getElementById("textbox").value;
    let textlength = text.length;
    container.innerHTML += `<h1 class="count_text">${textlength}</h1>`;
}
function toUppercase() {
    var container = document.querySelector(".container");
    let uc = document.getElementById("toupper").value;
    let uppercase = uc.toUpperCase();
    container.innerHTML += `<h1 class="count_text">${uppercase}</h1>`;
}

function tolowercase() {
    var container = document.querySelector(".container");
    let lc = document.getElementById("tolower").value;
    let lowercase = lc.toLowerCase();
    container.innerHTML += `<h1 class="count_text">${lowercase}</h1>`;
}

function concats() {
    var container = document.querySelector(".container");
    let txt1 = document.getElementById("txtbox1").value;
    let txt2 = document.getElementById("txtbox2").value;
    let combinedtext = txt1.concat(txt2);
    container.innerHTML += `<h1 class="count_text">${combinedtext}</h1>`;

}
function subs() {
    var container = document.querySelector(".container");
    let sub1 = document.getElementById("substr").value;
    let sub2 = document.getElementById("substr1").value;
    let sub3 = document.getElementById("substr2").value;
    let substring = sub1.substring(sub2, sub3);
    container.innerHTML += `<h1 class="count_text">${substring}</h1>`;

}
function slices() {
    var sl1 = document.getElementById("slice");
    var slicedstring = sl1.value.slice(0,-1);
    sl1.value=slicedstring;

}
function totrims() {
    var container = document.querySelector(".container");
    let trimtxt = document.getElementById("totrim").value;
    let trimmedtext = trimtxt.trim();
    container.innerHTML += `<h1 class="count_text">${trimmedtext}</h1>`;
}
function isincludes(){
    var container = document.querySelector(".container");
    let srchtxt=document.getElementById("includes_txt").value;
    let srchingtxt=document.getElementById("search_txt").value;
    let searchedtxt=srchtxt.includes(srchingtxt);
    container.innerHTML += `<h1 class="count_text">${searchedtxt}</h1>`;
    

}