const imageContainerE1 = document.querySelector(".pic-container");
i = 1;

function addNewImages() {
  for (let index = 0; index < 9; index++) {
    const newImgE1 = document.createElement("img");
    newImgE1.src = `https://picsum.photos/300?random=${++i}`;
    newImgE1.onclick = `https://picsum.photos/300?random=${++i}`;
    imageContainerE1.appendChild(newImgE1);
  }
}

addNewImages();
addNewImages();

window.onscroll = ()=>{
  const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
  if (scrollTop + clientHeight + 1 >= scrollHeight) {
    addNewImages();
  }
}

