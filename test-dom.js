const hello = document.querySelector(".hello");
// hello.style.fontSize = "1000px";
// hello.style.backgroundColor = "purple";
// hello.style.color = "green";

const test = document.querySelector("#test");
// const allText = document.querySelectorAll('.hello')

const container = document.querySelector(".container");
// afterbegin beforebegin afterend beforeend
// container.insertAdjacentHTML("afterbegin", "<h1>Hello</h1>")
// container.innerHTML += "<h1>YO</h1>"

const random = () => Math.trunc(Math.random() * 255);
document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == " ") {
    container.style.backgroundColor = `rgba(${random()}, ${random()}, ${random()}, ${Math.random()})`;
  }
});
