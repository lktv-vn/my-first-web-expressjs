//xử lí thao tác người dùng ở đây (hover hay event gì đó)
// document.getElementById('vidu').addEventListener('click', () => {
//     const userId = document.getElementById('vidu').getAttribute('data-user-id');
//     window.location.href = `/chemical/${userId}`;
// });


function attachClickEvents(ulId) {
    const lsMenuInside = document.getElementById(ulId);
    if (!lsMenuInside) return;

    const lsClick = lsMenuInside.querySelectorAll('.click'); // Dùng querySelectorAll thay vì getElementsByClassName
    lsClick.forEach((ls) => {
        if (!ls.dataset.clickBound) { // Kiểm tra nếu chưa gán sự kiện trước đó
            ls.addEventListener('click', handleMenuClick);
            ls.dataset.clickBound = "true"; // Đánh dấu đã gán sự kiện
        }
    });
}

function handleMenuClick(event) {
    const userId = event.currentTarget.getAttribute('data-user-id');
    if (userId) {
        // Xóa class active khỏi tất cả menu
        document.querySelectorAll('.click').forEach(item => item.classList.remove('active'));

        // Thêm class active cho phần tử được click
        event.currentTarget.classList.add('active');
        window.location.href = `/chemical/${userId}`;
    }
}

const lsMenu = [
    {name: 'fungicide', full: 'Thuốc Nấm' },
     { name: 'bactericide', full: 'Thuốc Khuẩn' },
      { name: 'insecticide', full: 'Thuốc côn trùng' },
       { name: 'herbicide', full: 'Thuốc Cỏ' },
        { name: 'namtocide', full: 'Thuốc tuyến trùng' }];


lsMenu.forEach((ls)=>{
    attachClickEvents(ls.name);
})

function submenu(){
    const lsSub = Array.from(document.getElementsByClassName('clickSub'));
    if(!lsSub) return;
    lsSub.forEach((s)=>{
        s.addEventListener('click',()=>{
            const vl = s.getAttribute('data-user-id');
            if(vl){
                window.location.href = `/chemical/${vl}`;
            }
        })
    })
}


function addEventForMenuLv1(farther, child) {
    let addEventForMenu = document.getElementById(farther)
    addEventForMenu.addEventListener('mouseenter', () => {
        if (document.getElementById(child)) {
            document.getElementById(child).style.display = 'flex';
            document.getElementById(child).style.flexDirection = 'column';
        }
    });
    addEventForMenu.addEventListener('mouseleave', () => {
        if (document.getElementById(child)) {
            document.getElementById(child).style.display = 'none';
        }
    });
}

lsMenu.forEach((element)=>{
    addEventForMenuLv1(element.name, element.name+'_child_1');
})

let farther1 = Array.from(document.getElementsByClassName('hclass'));

farther1.forEach(om => {
    const childIn = om.querySelector('ul')
    om.addEventListener('mouseenter',()=>{
        childIn.style.display = 'flex';
        childIn.style.flexDirection = 'column';
    })
    om.addEventListener('mouseleave',()=>{
        childIn.style.display = 'none';
    })
});
submenu();


