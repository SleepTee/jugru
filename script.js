const popup = document.getElementsByClassName("question")[0];
const closepop = document.getElementById("closepup");
const mainbuttontrue = document.getElementById("true");
const mainbuttonfalse = document.getElementById("false");

mainbuttontrue.onclick = function () {
    popup.style.display = "flex";
};

mainbuttonfalse.onclick = function () {
    popup.style.display = "flex";
};

closepop.onclick = function () {
    popup.style.display = "none";
};
