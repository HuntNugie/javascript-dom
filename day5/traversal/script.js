const close = document.querySelectorAll(".close")


close.forEach((e) => {
    e.addEventListener("click", (el) => {
        el.target.parentElement.parentElement.remove()
    })
})