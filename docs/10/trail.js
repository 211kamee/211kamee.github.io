const bodyE = document.querySelector("body");

let x, y;

bodyE = addEventListener("mousemove", (event) => {
  x = Math.random()*10 + event.offsetX;
  y = Math.random()*10 + event.offsetY;
  const spanE = document.createElement("span");
  spanE.style.left = x + "px";
  spanE.style.top = y + "px";
  bodyE.appendChild(spanE);

  setTimeout(()=>{
    spanE.remove();
  }, 500);
})