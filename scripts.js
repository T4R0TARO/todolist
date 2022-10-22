// create 'close' btn and append to li item
let myNodeList = document.getElementsByTagName("LI");
console.log(myNodeList);

// create close btn
for (let i = 0; i < myNodeList.length; i++) {
  console.log(myNodeList[i]);
  let span = document.createElement("SPAN");
  let icon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(icon);
  myNodeList[i].appendChild(span);
}

// add func to close btn
let closeBtn = document.getElementsByClassName("close");
let closeBtn2 = document.querySelectorAll(".close");
console.log(closeBtn);
console.log(closeBtn2);

console.log(closeBtn);
for (let i = 0; i < closeBtn.length; i++) {
  console.log(closeBtn[i]);
  closeBtn[i].onclick = function () {
    let div = this.parentElement;
    console.log(div);
    div.style.display = "none";
  };
}

// toggle marked styles
let list = document.querySelector("ul");
console.log(list);

list.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

// Create new li

function createNewElement() {
  // creates li from user input
  let li = document.createElement("LI");
  let inputValue = document.querySelector(".user-input").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);

  console.log(inputValue);
  // if user input if empty return err msg
  if (inputValue === "") {
    console.log("missing value");
  } else {
    list.appendChild(li);
  }

  document.querySelector(".user-input").value = "";

  // new close btn
  let span = document.createElement("SPAN");
  let icon = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(icon);
  li.appendChild(span);

  for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
