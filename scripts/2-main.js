
// ===========================================================================VARIABLE

let myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// ===========================================================================FUNCTION
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/firefox.jpg") {
    myImage.setAttribute("src", "../images/lufei.jpg");
  } else {
    myImage.setAttribute("src", "../images/firefox.jpg");
  }
};

function updatetUserName() {
  let myName = prompt("请输入你的名字。");
  if (myName === "123") {
    updatetUserName();
  } else {
    localStorage.setItem("name", myName);
  }
}
function setUserName() {
  let myName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla 酷毙了，" + myName;
}
myButton.onclick = function () {
  updatetUserName();
  setUserName();
};

// ===========================================================================INITIAL


if (!localStorage.getItem("name")) {
  updatetUserName();
}
setUserName();

