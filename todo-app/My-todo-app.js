const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

button.addEventListener("click", onclick);
input.addEventListener("keypress", addElement);

buttonListElement();

function checkInputlength() {
  return input.value.length;
}

function onclick() {
  if (checkInputlength() > 1) {
    createListElement();
  }
}

function createListElement() {
  const li = document.createElement("li");
  const button = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(button);
  button.innerHTML = "delete";
  ul.appendChild(li);
  input.value = "";

  button.addEventListener("click", clearElement);
}


function addElement() {
  if (checkInputlength() > 1 && event.keyCode === 13) {
    createListElement();
  }
}

function buttonListElement() {
  const buttons = document.querySelectorAll("li .delete");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", clearElement);
  }
}


function clearElement() {
  for (const i = 0; i < li.length; i++) {
    this.parentNode.remove();
  }
}
