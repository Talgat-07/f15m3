const block = document.getElementById("block");
const title = document.getElementsByTagName("h1");
const blockClass = document.getElementsByClassName("block");

const item = document.querySelector("#block");
const items = document.querySelectorAll("h1");

console.log(block);
console.log(title);
console.log(blockClass[0]);

console.log(item);
console.log(items);

// [h1, h1]

const world = title[1];
console.log(world);

world.style.color = "red";
world.style.fontSize = "120px";
world.textContent = "world 2.0";
world.innerHTML = "<p>world p</p>";

world.classList.add("text");
world.classList.remove("text");
world.classList.toggle("text");
world.classList.toggle("hello");

world.className = "newClass";
world.className += "Class";

console.log(world.className);

//
const element = document.getElementById("element");
console.log(element);

const parent = element.parentElement;
console.log(parent);

const child = element.children[0];
console.log(child);

const previous = element.previousElementSibling;
console.log(previous);

const next = element.nextElementSibling;
console.log(next);

next.remove();

const newChild = document.createElement("div");
newChild.id = "child";

previous.appendChild(newChild);

const insert = document.getElementById("insert");

const divInsert = document.createElement("div");
divInsert.classList.add("insertTest");

// insert.insertAdjacentElement("beforebegin", divInsert) перед эл
// insert.insertAdjacentElement("afterend", divInsert) в начало эл внутри
// insert.insertAdjacentElement("afterbegin", divInsert) в конец эл внутри
// insert.insertAdjacentElement("beforeend", divInsert) после эл
