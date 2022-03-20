const panel = document.querySelectorAll(".panel")
panel.forEach((element) => {
    element.addEventListener("click", () => {
        for (let index = 0; index < panel.length; index++) {
            panel[index].classList.remove("active");
        }
        element.classList.toggle("active")
    })
})




// function removeActive() {
//     panel.forEach((elment) => {
//         element.classList.remove("active")
//     })
// }

