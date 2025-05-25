// document.querySelectorAll("ul.frac-group-list.frac>li").forEach((item, index) => {
//     item.setAttribute("data_user_id", index+1);
// })
// document.querySelectorAll("ul.frac-group-list.irac>li").forEach((item, index) => {
//     item.setAttribute("data_user_id", index+17);
// })

document.querySelectorAll("ul.frac-group-list>li").forEach((item) => {
    item.addEventListener('click', function () {
        const id = this.getAttribute("data_user_id")
        console.log(id)
        window.location.href = "/home-topic/chemical/chemical-frac/" + id //"pest/${id}"
    })
})