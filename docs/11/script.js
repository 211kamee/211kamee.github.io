const monthName = document.getElementById("month");
const dayName = document.getElementById("day");
const dateName = document.getElementById("date");
const yearName = document.getElementById("year");

const today = new Date();

monthName.innerText = today.toLocaleString("en", { month:"long" });
dayName.innerText = today.toLocaleString("en", { weekday:"long" });
dateName.innerText = today.getDate();
yearName.innerText = today.getFullYear();

const MouseCords = document.querySelector(`.calender`);

MouseCords.addEventListener(`mouseover`, (event) => {
    let Xcords = event.pageX - MouseCords.offsetLeft;
    let Ycords = event.pageY - MouseCords.offsetTop;
    MouseCords.style.setProperty(`--Xcord`, `${Xcords}px`);
    MouseCords.style.setProperty(`--Ycord`, `${Ycords}px`);
    Xcords = Ycords = undefined;
})

