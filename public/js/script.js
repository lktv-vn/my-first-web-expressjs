

const menuItems = [
    {
        title: 'Home',
        subitems: []
    },
    {
        title: 'Plants >',
        subitems: [
            { namePage: 'Tomatoes', linkTo: 'vidugoptrang.html' },
            { namePage: 'Watermelon', linkTo: '#' },
            { namePage: 'Pepper', linkTo: '#' },
            { namePage: 'Cumcumber', linkTo: '#' },
            { namePage: 'Eggplant', linkTo: '#' },
            { namePage: 'Melon', linkTo: '#' },
            { namePage: 'Rice', linkTo: '#' },
            { namePage: 'Durian', linkTo: '#' },
            { namePage: 'Others', linkTo: '#' },
        ]
    },
    {
        title: 'Pest and Disease >',
        subitems: [
            { namePage: 'Anthracnose', linkTo: '.html' },
            { namePage: 'Phytopthora', linkTo: '.html' },
            { namePage: 'Cercospora', linkTo: '.html' },
            { namePage: 'Alternaria', linkTo: '.html' },
            { namePage: 'Pseudomonas', linkTo: '.html' },
            { namePage: 'Mycophaserella', linkTo: '.html' },
            { namePage: 'Pyricularia', linkTo: '.html' },
            { namePage: 'Xanthomonas', linkTo: '.html' },
            { namePage: 'TMV-virus', linkTo: '.html' },
            { namePage: 'TSWV-virus', linkTo: '.html' },
            { namePage: 'TYLCV-virus', linkTo: '.html' },
            { namePage: 'Downy mildew', linkTo: 'vidugoptrang.html' },
            { namePage: 'Powdery mildew', linkTo: 'vidugoptrang.html' },
            { namePage: 'gỉ sắt', linkTo: 'vidugoptrang.html' },
            { namePage: 'Erwinia', linkTo: 'vidugoptrang.html' },
            { namePage: 'Pythium', linkTo: 'vidugoptrang.html' },
        ]
    },
    {
        title: 'Pesticides >',
        subitems: [
            { namePage: 'Thuốc phòng trị nấm', linkTo: '.html' },
            { namePage: 'Thuốc phòng trị khuẩn', linkTo: '.html' },
            { namePage: 'Thuốc phòng trị côn trùng', linkTo: '.html' },
            { namePage: 'Triazole', linkTo: 'vidugoptrang.html' },
            { namePage: 'Strobilurin', linkTo: 'vidugoptrang.html' },
            { namePage: 'Clorothalonil', linkTo: 'vidugoptrang.html' },
            { namePage: 'Mancozeb', linkTo: 'vidugoptrang.html' },
            { namePage: 'Copper', linkTo: 'vidugoptrang.html' },
            { namePage: 'Sulfur', linkTo: 'vidugoptrang.html' },
            { namePage: 'Streptomycin sulphate', linkTo: 'vidugoptrang.html' },
            { namePage: 'Xantocin', linkTo: 'vidugoptrang.html' },
            { namePage: 'Oxolinic acid', linkTo: 'vidugoptrang.html' },
            { namePage: 'Kasugamycin', linkTo: 'vidugoptrang.html' },
            { namePage: 'Bismethiazole', linkTo: 'vidugoptrang.html' },
            { namePage: 'Nynamycin', linkTo: 'vidugoptrang.html' },
            { namePage: 'Validamycin', linkTo: 'vidugoptrang.html' },
            { namePage: 'Cymoxanil', linkTo: 'vidugoptrang.html' },
        ]
    },
    {
        title: 'Fertilizes >',
        subitems: [
            { namePage: 'Phân bón gốc', linkTo: 'vidugoptrang.html' },
            { namePage: 'Phân hòa tan', linkTo: 'vidugoptrang.html' },
            { namePage: 'Phân hữu cơ', linkTo: 'vidugoptrang.html' },
            { namePage: 'Các nguyên tố dinh dưỡng', linkTo: 'vidugoptrang.html' },
        ]
    },
    {
        title: 'HighTech Agriculture >',
        subitems: [
            { namePage: 'Irrigation System', linkTo: 'vidugoptrang.html' },
            { namePage: 'Solude Fertilizer Recommedation', linkTo: 'vidugoptrang.html' },
            { namePage: 'Hydroponic Method Multure', linkTo: 'vidugoptrang.html' },
            { namePage: 'Agriculture In Việt Nam', linkTo: 'vidugoptrang.html' },
        ]
    },
    {
        title: 'Contact Us',
        subitems: []
    }
];
//backup
// const ganVaothediv = document.getElementById('menu-footer');
// const divTitle = document.createElement('div');
// divTitle.classList.add('cdivTitle');
// divTitle.id = 'thediv';
// ganVaothediv.appendChild(divTitle);
// const getIdDiv = document.getElementById('thediv');
// menuItems.forEach(itimes => {
//     // const getIdDiv = document.getElementById('thediv');
//     const childDiv = document.createElement('div');
//     const li = document.createElement('li');
//     li.textContent = itimes.title;
//     li.classList.add('titleFooter');
//     childDiv.appendChild(li);
//     itimes.subitems.forEach(subitem => {
//         const lli = document.createElement('li');
//         lli.textContent = ''

//         const la = document.createElement('a');
//         la.href = subitem.linkTo;
//         la.textContent = subitem.namePage
//         lli.appendChild(la);

//         childDiv.appendChild(lli);
//     })
//     getIdDiv.appendChild(childDiv);
// })
// ganVaothediv.appendChild(getIdDiv);

// addEvenForMenu
function addEvenForMenu() {
    const listMenu = document.getElementById('menu-list');
    const subList = listMenu.querySelectorAll('li');
    
    subList.forEach(s => {
        const _ul = s.querySelector('ul');
        
        if (_ul) { // Kiểm tra nếu _ul tồn tại
            s.addEventListener('mouseenter', () => {
                _ul.style.display = 'block';
            });
            s.addEventListener('mouseleave', () => {
                _ul.style.display = 'none';
            });
            // s.addEventListener('click', s=>{
            //     window.location.href = '/chemical'
            // })
        }
    });
}

addEvenForMenu();

// begin slideMenu
let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let autoSlideInterval;

    

    function updateSlider() {
        const offset = -slideIndex * 100;
        document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === slideIndex);
        });
    }

    function autoSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        updateSlider();
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 5000);
    }
    function currentSlide(index) {
        slideIndex = index;
        updateSlider();
        resetAutoSlide(); // Reset lại tự động chuyển slide sau khi chọn thủ công
    }
    // Bắt đầu tự động chuyển slide
    autoSlideInterval = setInterval(autoSlide, 5000);

    // Đảm bảo chức năng chọn thủ công vẫn hoạt động ngay khi load trang
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => currentSlide(idx));
    });

