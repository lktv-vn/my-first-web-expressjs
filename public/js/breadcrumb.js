const breadcrumbContainer = document.getElementById('breadcrumb');
const pathParts = window.location.pathname.split('/').filter(part => part); // Bỏ phần rỗng
let currentPath = '';

// Thêm "Trang chủ" trước
const homeLink = document.createElement('a');
homeLink.href = '/';
homeLink.textContent = 'Trang chủ';
breadcrumbContainer.appendChild(homeLink);

pathParts.forEach((part, index) => {
    breadcrumbContainer.appendChild(document.createTextNode(' > '));

    currentPath += '/' + part;

    const link = document.createElement('a');
    link.href = currentPath;
    link.textContent = decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1));
    breadcrumbContainer.appendChild(link);
});