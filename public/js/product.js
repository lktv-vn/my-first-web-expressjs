document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu_product > *');
    
    menuItems.forEach(element => {
        element.addEventListener('click', () => {
            const className = element.className;
            document.getElementById('show-header').textContent = element.textContent.toUpperCase();
            document.getElementById('show-header').style.display = 'block';
            // Ẩn tất cả các thẻ li trong ul.mmo
            const allMmoElements = document.querySelectorAll('.mmo li');
            allMmoElements.forEach(li => {
                li.style.display = 'none';
            });
            
            // Hiển thị các thẻ li có cùng class với thẻ được nhấp vào trong .mmo
            const targetMmoElements = document.querySelectorAll(`.mmo .${className}`);
            targetMmoElements.forEach(target => {
                target.style.display = 'block';
            });

            // Ẩn tất cả các thẻ div trong .jko
            const allJkoElements = document.querySelectorAll('.jko .product');
            allJkoElements.forEach(div => {
                div.style.display = 'none';
            });
            
            // Hiển thị các thẻ div có cùng class với thẻ được nhấp vào trong .jko
            const targetJkoElements = document.querySelectorAll(`.jko .${className}`);
            targetJkoElements.forEach(target => {
                target.style.display = 'block';
            });

            document.getElementById('co').style.display = 'none';
            element.classList.add('ttr');
        });
    });
});

function showMenu() {
    const ad =document.getElementById('gh');
    console.log(ad);

    const show = document.getElementById('co');
    
    ad.addEventListener('click',()=>{
        document.getElementById('show-header').textContent = '';
        if (show.style.display === 'none' || show.style.display === '') {
            show.style.display = 'flex'; // Sửa lỗi cú pháp
        } else {
            show.style.display = 'none'; // Đảm bảo rằng nút bấm lần thứ hai sẽ ẩn đi
        }
    })
    
}
showMenu();