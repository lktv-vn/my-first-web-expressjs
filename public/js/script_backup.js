

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

const menuContainer = document.getElementById('menu');
console.log(menuContainer);

menuItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('has-dropdown');
    li.textContent = item.title;

    const ul = document.createElement('ul');
    ul.classList.add('dropdown');

    item.subitems.forEach(subitem => {
        const subLi = document.createElement('li');
        const alili = document.createElement('a');
        alili.href = subitem.linkTo;
        alili.textContent = subitem.namePage;
        subLi.appendChild(alili);
        ul.appendChild(subLi);
    });

    li.appendChild(ul);
    menuContainer.appendChild(li);
});

// const footerContainer = document.getElementById('menu-footer');
// const ulList = document.createElement('ul');
// menuItems.forEach(item => {
//     const li = document.createElement('li');
//     li.textContent = item.title;
//     if (item.subitems.length > 0) {
//         const subUlList = document.createElement('ul');
//         item.subitems.forEach(subitem => {
//             const subLi = document.createElement('li');
//             const a = document.createElement('a');
//             a.href = subitem.linkTo;
//             a.textContent = subitem.namePage;
//             subLi.appendChild(a); subUlList.appendChild(subLi);
//         });
//         li.appendChild(subUlList);
//     } ulList.appendChild(li);
// });
// footerContainer.appendChild(ulList);

const ganVaothediv = document.getElementById('menu-footer');
const divTitle = document.createElement('div');
divTitle.classList.add('cdivTitle');
divTitle.id = 'thediv';
ganVaothediv.appendChild(divTitle);
const getIdDiv = document.getElementById('thediv');
menuItems.forEach(itimes => {
    // const getIdDiv = document.getElementById('thediv');
    const childDiv = document.createElement('div');
    const li = document.createElement('li');
    li.textContent = itimes.title;
    li.classList.add('titleFooter');
    childDiv.appendChild(li);
    itimes.subitems.forEach(subitem => {
        const lli = document.createElement('li');
        lli.textContent = ''

        const la = document.createElement('a');
        la.href = subitem.linkTo;
        la.textContent = subitem.namePage
        lli.appendChild(la);

        childDiv.appendChild(lli);
    })
    getIdDiv.appendChild(childDiv);
})
ganVaothediv.appendChild(getIdDiv);

const contentHotContent = [
    { link: '#', title: 'Ươm cây con từng bước (rau)', content: 'Khám phá các bước chi tiết để ươm cây rau hiệu quả, từ chọn giống, chuẩn bị đất, đến cách chăm sóc cây non. Hướng dẫn dễ hiểu, phù hợp với mọi người, giúp bạn bắt đầu hành trình làm vườn tại nhà một cách dễ dàng.', linkImg: './img/6771.JPG', },
    { link: '#', title: 'Làm thế nào để cây con mập và khỏe', content: 'Tìm hiểu bí quyết giúp cây con phát triển mập mạp và khỏe mạnh. Từ cách bón phân đúng cách, kiểm soát ánh sáng, đến kỹ thuật tưới nước chuẩn xác, bài viết này sẽ là cẩm nang cho những ai yêu thích trồng cây.', linkImg: './img/5990.jpg', },
    { link: '#', title: 'Làm thế nào để cây ra rễ nhiều', content: 'Muốn cây phát triển mạnh mẽ? Hãy cùng tìm hiểu các phương pháp kích thích rễ cây mọc nhiều và khỏe. Bài viết cung cấp giải pháp từ tự nhiên đến công nghệ, giúp cây của bạn đạt hiệu quả cao nhất.', linkImg: './img/6730.jpg', },
    { link: '#', title: 'Quá trình tạo một khu vườn nhỏ tại nhà', content: 'Biến không gian nhỏ thành khu vườn xanh mát với hướng dẫn từ A-Z. Bài viết sẽ gợi ý cách chọn cây, sắp xếp không gian, và duy trì khu vườn, mang đến cho bạn một nơi thư giãn lý tưởng ngay tại nhà.', linkImg: './img/6765.jpg', },
];

const divNgoaiCung = document.getElementById('hot-content');
const divTitleHotContent = document.createElement('div');
divTitleHotContent.classList.add('div1');
divTitleHotContent.appendChild(Object.assign(document.createElement('p'), { textContent: 'Bài Viết Nổi Bật', classList: 's' }));
divNgoaiCung.appendChild(divTitleHotContent);
const divBodyHotContent = document.createElement('div');
divBodyHotContent.classList.add('div2');

contentHotContent.forEach(hotContentt => {

    const divNayODau = document.createElement('div');
    divNayODau.classList.add('cssDivNayODau');

    const _img = document.createElement('img');
    _img.classList.add('cssImg');
    _img.src = hotContentt.linkImg;
    divNayODau.appendChild(_img);
    divNayODau.appendChild(Object.assign(document.createElement('h1'), { textContent: hotContentt.title, classList: 'ss' }));
    divNayODau.appendChild(Object.assign(document.createElement('p'), { textContent: hotContentt.content, classList: 'ss' }));
    divBodyHotContent.appendChild(divNayODau);
})
divNgoaiCung.appendChild(divBodyHotContent);

const theDivLonn = document.getElementById('theDivLon');



const divR = document.createElement('div');
divR.appendChild(Object.assign(document.createElement('h1'), { textContent: 'Đây là tiêu đề bài viết khá dài dòng đấy nha', classList: 'divR' }));
divR.appendChild(Object.assign(document.createElement('p'), { textContent: 'Muốn cây phát triển mạnh mẽ? Hãy cùng tìm hiểu các phương pháp kích thích rễ cây mọc nhiều và khỏe. Bài viết cung cấp giải pháp từ tự nhiên đến công nghệ, giúp cây của bạn đạt hiệu quả cao nhất.', classList: 'divR' }));
divR.classList.add('FdivR');
theDivLonn.appendChild(divR);
const divC = document.createElement('div');
divC.appendChild(Object.assign(document.createElement('img'), { src: './img/6765.jpg', classList: 'divC' }));
divC.classList.add('FdivC');
theDivLonn.appendChild(divC);

const firstContent = document.getElementById('firstContent');
const divLFirstContent = Object.assign(document.createElement('div'), { classList: 'divL-firstContent' });
divLFirstContent.appendChild(Object.assign(document.createElement('img'), { src: './img/sp.jpg', classList: 'sp' }));
firstContent.appendChild(divLFirstContent);
// const divRFirstContent = document.createElement('div'); 
const divRFirstContent = Object.assign(document.createElement('div'), { classList: 'divR-firstContent' });
// divRFirstContent.classList.add('divR-firstContent')
divRFirstContent.appendChild(Object.assign(document.createElement('div'), { classList: 'divChildTopL-firstContent' }));
// divRFirstContent.appendChild(Object.assign(document.createElement('div'), {classList: 'divChildBottomL-firstContent', id: 'redline'}));
const redlinee = Object.assign(document.createElement('div'), { classList: 'divChildBottomL-firstContent', id: 'redline' });
for (let i = 0; i < 4; i++) {
    redlinee.appendChild(
        Object.assign(
            document.createElement('img'),
            {
                src: './img/square.jpg',
                classList: 'square',
                id: 'squaree' + i,
                onmouseover: function () { changeBackground(i + 1); console.log("Hovered on img " + i); }
            }));
};
divRFirstContent.appendChild(redlinee);
firstContent.appendChild(divRFirstContent);



function changeBackground(option) {
    var div = document.getElementById("squaree");
    switch (option) {
        case 1: divRFirstContent.style.backgroundImage = "url('./img/6771.jpg')";
            break;
        case 2: divRFirstContent.style.backgroundImage = "url('./img/6765.jpg')";
            break;
        case 3: divRFirstContent.style.backgroundImage = "url('./img/6730.jpg')";
            break;
        case 4: divRFirstContent.style.backgroundImage = "url('./img/5990.jpg')";
            break;
        default: divRFirstContent.style.backgroundImage = "url('./img/6416.jpg')";
    }
}