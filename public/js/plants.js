function xuongDongP(_id) {
    let tagNeed = document.getElementById(_id);
    let spanTag = tagNeed.querySelectorAll('strong');
    spanTag.forEach(element => {
        let a = element.textContent.replace(/\n\n/g, "<br>");
        element.innerHTML = a;
    });
}
xuongDongP('css-for-span');
xuongDongP('css-for-span-1');

function submenu() {
    const lsSub = Array.from(document.getElementsByClassName('clickSub'));
    if (!lsSub) return;
    lsSub.forEach((s) => {
        s.addEventListener('click', () => {
            const vl = s.getAttribute('data-user-id');
            if (vl) {
                window.location.href = `/plants/${vl}`;
            }
        })
        s.setAttribute('data-event-added', 'true');
    })
}



const lsMenu = ['lua', 'fruit', 'veg', 'other'];
// const lsMenu = [
//     { name: 'lua', full: 'Cây lúa' },
//     { name: 'fruit', full: 'Cây ăn trái' },
//     { name: 'veg', full: 'Rau màu' },
//     { name: 'other', full: 'Khác' }
// ];


function addCssMenu(_id) {
    let domElement = document.getElementById(_id);

    // Kiểm tra xem phần tử có tồn tại không
    if (domElement) {
        // Thêm thuộc tính CSS cho phần tử cha
        domElement.style.display = 'inline-block';
        domElement.style.position = 'relative';

        // Lấy thẻ <ul> bên trong phần tử cha
        let ulElement = domElement.querySelector('ul');

        // Kiểm tra xem thẻ <ul> có tồn tại không
        if (ulElement) {
            // Thêm thuộc tính CSS ban đầu cho thẻ <ul>
            ulElement.style.display = 'none';
            ulElement.style.position = 'absolute';
            ulElement.style.top = '100%';
            ulElement.style.left = '0';
            ulElement.style.minWidth = '160px';
            ulElement.style.boxShadow = '0px 8px 16px 0px rgba(0,0,0,0.3)';
            ulElement.style.zIndex = '1';
            ulElement.style.backgroundColor = '#f9f9f9';
            ulElement.style.margin = '0';

            // Lấy tất cả các thẻ <li> bên trong <ul>
            let liElements = ulElement.querySelectorAll('li');

            // Gán sự kiện hover cho mỗi thẻ <li>
            liElements.forEach(liEle => {
                liEle.style.color = 'black';
                liEle.style.padding = '12px 16px';
                liEle.style.textDecoration = 'none';
                liEle.style.display = 'block';

                liEle.addEventListener('mouseenter', () => {
                    liEle.style.backgroundColor = 'black';
                    liEle.style.color = 'white';
                });

                liEle.addEventListener('mouseleave', () => {
                    liEle.style.backgroundColor = '';
                    liEle.style.color = 'black';
                });
            });

            // Thêm sự kiện hover vào phần tử cha
            domElement.addEventListener('mouseenter', () => {
                ulElement.style.display = 'block';
            });

            // Khi không hover nữa thì ẩn đi
            domElement.addEventListener('mouseleave', () => {
                ulElement.style.display = 'none';
            });
        } else {
            console.error('Không tìm thấy thẻ <ul> bên trong phần tử với ID ' + _id);
        }
    } else {
        console.error('Phần tử với ID ' + _id + ' không tồn tại.');
    }
}




// let listMenu = ['listInsect', 'listFungi', 'listBacteria', 'listWheat', 'listNematod'];
//Ham nay dung de gan event click cho menu dropdown
function addEventListenerTolsElement(startId) {
    // Lấy phần tử bắt đầu bằng id
    let elementDom = document.getElementById(startId);

    // Lấy danh sách các phần tử <li> nằm trong <ul> nằm trong <li> của phần tử bắt đầu
    let lsElement = elementDom.querySelectorAll('ul > li ');

    // Gán sự kiện click cho mỗi phần tử <li>
    lsElement.forEach(li => {
        li.addEventListener('click', function () {
            // Lấy user-id từ thuộc tính data-user-id
            const userId = li.getAttribute('data-user-id');
            window.location.href = `/plants/${userId}`;


        });
    });
}

// Gọi hàm cho mỗi ID trong lsMenu
lsMenu.forEach(ls => {
    addCssMenu(ls)
    addEventListenerTolsElement(ls);
});
submenu();