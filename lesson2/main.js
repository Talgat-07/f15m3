const button = document.getElementById("btn");
const form = document.getElementById("form");
const block = document.getElementById("block")

button.addEventListener("click", function (el) {
  alert("hello");
  console.log(el.target);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.children[0];
  console.log(input.value);
});

block.addEventListener("mousemove", () => {
	block.style.backgroundColor = "yellow"
})

block.addEventListener("mouseleave", () => {
	block.style.backgroundColor = "red"
})