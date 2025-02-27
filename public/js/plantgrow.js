// Hàm tạo bảng
function createTable(containerId, headers, data) {
    // Xóa bảng cũ nếu có
    const tableContainer = document.getElementById(containerId);
    tableContainer.innerHTML = '';
  
    const table = document.createElement('table');
  
    // Tạo hàng tiêu đề
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
      const th = document.createElement('th');
      th.textContent = headerText;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
  
    // Tạo các hàng dữ liệu
    data.forEach(rowData => {
      const row = document.createElement('tr');
      rowData.forEach(cellData => {
        const td = document.createElement('td');
        td.textContent = cellData;
        row.appendChild(td);
      });
      table.appendChild(row);
    });
  
    // Thêm bảng vào container
    tableContainer.appendChild(table);
  }
  
  // Dữ liệu ví dụ
  const headers = ['A', 'B'];
  const data = [
    [1, 'a'],
    [2, 'b'],
    [3, 'c'],
    [4, 'd']
  ];
  
  // Tạo bảng ban đầu
//   createTable('table-container', headers, data);
  


  let plantData = [];
  fetch('../json/plant.json')
            .then(response => response.json())
            .then(data => {
                plantData = data;
                // let card1 = new Card(plantData[0], 'Nội dung của thẻ 1', 'gg').createCard();
                plantData.forEach(gg => {
                    const ff = Object.assign(document.createElement('div'),{id: 'i'+ gg.id});
                    document.getElementById('rr').appendChild(ff);
                    console.log(gg.id);
                    let card1 = new Card(gg, 'Nội dung của thẻ 1', 'i'+gg.id).createCard();
                    
                })
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });

  class Card {
    constructor(plantData, content, idtag) {
        this.idtag = idtag;
        this.namePestAndDisease = plantData.name_pest_and_disease;
        this.content = content;
    }

    createCard() {
        // Tạo phần tử thẻ
        console.log(this.namePestAndDisease);
        let card = document.createElement('div');
        card.className = 'left';
        card.style.width = '30%';
        card.style.height = '100px';
        card.style.backgroundColor = "red";

        // Tạo phần tử tiêu đề
        let cardTitle = document.createElement('div');
        cardTitle.className = 'middle';
        cardTitle.style.width = '10%';
        cardTitle.style.height = '100px';
        cardTitle.style.backgroundColor = "green";

        // Tạo phần tử nội dung
        let cardContent = document.createElement('div');
        cardContent.className = 'right';
        cardContent.style.width = '40%';
        cardContent.style.height = '100px';
        cardContent.style.backgroundColor = "red";

        const divmain = document.getElementById(this.idtag);
        // Gắn tiêu đề và nội dung vào thẻ
        divmain.appendChild(card);
        divmain.appendChild(cardTitle);
        divmain.appendChild(cardContent);

        return card;
    }
}

// Sử dụng class để tạo các thẻ



function thaydoiNoidungTieude(demuc){
    const lss = document.getElementById('menubar');
    lss.querySelectorAll('h3').forEach((lsh3menu, index)=>{
        lsh3menu.addEventListener('click', ()=>{
            Object.assign(document.getElementById('tieude'),{textContent: demuc[index].tieude});
            Object.assign(document.getElementById('img'),{src: demuc[index].linkimg});
            Object.assign(document.getElementById('noidung'),{textContent: demuc[index].contentt});

        })
    })
}
fetch('../json/demuc.json')
            .then(response => response.json())
            .then(data => {
                const demuc = data;
                thaydoiNoidungTieude(demuc);
                title = data[0];
                Object.assign(document.getElementById('tieude'),{textContent: title.tieude});
                Object.assign(document.getElementById('img'),{src: title.linkimg});
                Object.assign(document.getElementById('noidung'),{textContent: title.contentt});
                console.log(title.linkimg);
                
            })
            .catch(error => {
                console.error('Error fetching JSON:', error);
            });






