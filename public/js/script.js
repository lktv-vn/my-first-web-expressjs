window.menu = function () {
    const menu = document.getElementById('main-menus');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  }

const link = document.createElement("link");
link.rel = "icon";
link.href = "/img/logo.png";
link.type = "image/png";
document.head.appendChild(link);


