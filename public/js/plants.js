document.querySelectorAll("ul.menus  li").forEach((item) => {
    item.addEventListener('click', function () {
        const id = this.getAttribute("data_user_id")
        console.log(id)
        window.location.href = "/home-topic/plants/" + id //"pest/${id}"
    })
})

document.querySelector(".header-img").style.display = "none"