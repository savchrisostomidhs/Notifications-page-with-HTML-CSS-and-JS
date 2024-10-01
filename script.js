const button = document.querySelector(".js-button");

const notifications = document.querySelector(".text h1 span");
const unread = document.querySelectorAll(".unread");
const red = document.querySelectorAll(".red");

button.addEventListener("click", () => {
    notifications.innerHTML = 0;

    unread.forEach(value => value.style.backgroundColor = "hsl(0, 0%, 100%)");
    red.forEach(value => value.style.display = "none");
});