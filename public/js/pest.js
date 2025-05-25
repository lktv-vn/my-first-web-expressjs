// const a = ["menu-1", "menu-2", "menu-3"]
// a.forEach((item) => {
//     console.log(item)
//     document.querySelector("h3." + item).addEventListener('click', function () {
//         console.log(item)
//         document.querySelectorAll("ul.menus").forEach((items) => {
//             items.style.display = "none"
//             console.log(items)
//         })
//         document.querySelector("ul." + item).style.display = "block"
//     })
// })

// chuyển trang giữa các menu
document.querySelectorAll("ul.menus  li").forEach((item) => {
    item.addEventListener('click', function () {
        const id = this.getAttribute("data_user_id")
        console.log(id)
        window.location.href = "/home-topic/pest/" + id //"pest/${id}"
    })
})