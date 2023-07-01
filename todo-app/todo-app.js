const input = document.querySelector('#todo-app-input');
const list = document.querySelector('#todo-list')
const button = document.querySelector('#todo-button')

document.querySelector('#form').addEventListener('submit', (event) => event.preventDefault());

const STORAGE = [];

function validate(value) {
    if(value?.length > 3) {
        return value
    }
    return null;
}

function putTodoInStorage (value) {
    return STORAGE.push({
        todo: value,
        date: new Date(),
        id: STORAGE.length + 1
    })
}

function createHTMLTodo (index) {
    const {todo, id} = STORAGE[index -1];
    const newListItem = document.createElement('li');
    newListItem.className = `todo-app-item-${id}`;
    newListItem.textContent = `${id}: ${todo}`;
    return newListItem;
}

function renderHTMLTodo (listHTMLElement, newListItem) {
    listHTMLElement.appendChild(newListItem);
}

function clearInput(input){
    input.value = ''
}


function init(input) {
    const value = validate(input.value)

    if(value) {
        const id = putTodoInStorage(value)
        const newListItem = createHTMLTodo(id)

        renderHTMLTodo(list, newListItem)
        clearInput(input)
    }

    console.log(STORAGE)
}

button.addEventListener("click", (event) => {
    // console.log('event', event);
    // console.log('This button works fuck! STORAGE:', STORAGE)

    init(input)
})


Let person = "John";

function makeworker() {

person = "Pete";

return function () { console.log(person);

};

}

person = "Alan";

Let work = makeWorker(); work();