const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li = document.getElementsByTagName("li");

button.addEventListener("click", Onclick);
input.addEventListener("keypress", addElement);

function checkInputlength() {
  return input.value.length;
}

function Onclick() {
  if (checkInputlength() > 1) {
    createListElement();
  }
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  liEvent();
  buttonListElement();
}

function addElement() {
  if (checkInputlength() > 1 && event.keyCode === 13) {
    createListElement();
  }
}
