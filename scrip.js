
// document.addEventListener('DOMContentLoaded', function () {
//     // Hàm thêm một hàng mới để nhập liệu
//     document.getElementById('btnAdd').addEventListener('click', function () {
//         const errorTable = document.getElementById('errorTable');
//         const rowCount = errorTable.rows.length;
//         const row = errorTable.insertRow(rowCount);

//         for (let i = 0; i < 5; i++) {
//             const cell = row.insertCell(i);
//             if (i === 0) {
//                 cell.innerText = rowCount; // Cột STT
//             } else {
//                 const input = document.createElement('input');
//                 input.type = 'text';
//                 cell.appendChild(input);
//             }
//         }
//     });

//     // Hàm xác nhận và chuyển dữ liệu xuống bảng dưới
//     document.getElementById('btnConfirm').addEventListener('click', function () {
//         const errorTable = document.getElementById('errorTable');
//         const processingTable = document.getElementById('processingTable');

//         for (let i = 1; i < errorTable.rows.length; i++) {
//             const row = processingTable.insertRow(processingTable.rows.length);

//             for (let j = 0; j < 9; j++) {
//                 const cell = row.insertCell(j);
//                 if (j < 5) {
//                     cell.innerText = errorTable.rows[i].cells[j].children[0]?.value || errorTable.rows[i].cells[j].innerText;
//                 } else {
//                     cell.innerText = ''; // Các cột khác có thể được điền sau
//                 }
//             }
//         }

//         // Xóa bảng errorTable trừ hàng tiêu đề
//         for (let i = errorTable.rows.length - 1; i > 0; i--) {
//             errorTable.deleteRow(i);
//         }
//     });
// });


let deviceOptions = ['Máy tính', 'Máy quét mã vạch', 'Máy in/intem/photo', 'Tivi', 'Màn hình máy tính', 'bán phí/chuột', 'camera', 'internet'];
let locationOptions = ['Văn phòng nhà ăn', 'Nhà ăn', 'VP kế toán', 'Lò mountain', 'Lò Fulltime', 'Lò Yuegao', 'Kho VT', 'Kho NL', 'Hộp', 'VP Hôp', 'EI', 'Mài cây tự động', 'Mài cây số 9', 'Mài cây số 10', 'Song cạnh 1-2', 'Song cạnh 3-4', 'Cắt Disai', 'Căt Intermac', 'Truyền dán 1', 'Truyền dán 2', 'Truyền dán 3'];
let errorDevice = ['Không lên hình', 'Không quét được', 'In lỗi']
let btnAdd = document.querySelector('.btn-add');
let btnConfirm = document.querySelector('.btn-confirm');
console.log(btnConfirm);
let errorTable = document.querySelector('.content-error .content__table');
console.log(errorTable);
let processingTale = document.querySelector('.content-processing .content__table');
let errorColum = document.querySelectorAll('.content-error .content__table .colum')
console.log(errorColum);
let processingColum = document.querySelectorAll('.content-processing .content__table .colum')
let errorBody = document.querySelector('.content-error .error-body')
console.log(errorBody);


// add row và các cell tương ứng
btnAdd.onclick = function () {
    let errorBodyColum = document.querySelectorAll('.content-error .error-body td')
    let newRow = errorBody.insertRow();
    let rowCount = errorTable.rows.length;
    let result = false;
    for (let i = 0; i < errorColum.length; i++) {
        let cellAdd = newRow.insertCell(i)
        if (i === 0) {
            cellAdd.innerHTML = rowCount - 1
        } else if (i === 1) {
            cellAdd.innerHTML = `<input type="text" placeholder="Thiết bị" required class="input-full-width"></input>`
        } else if (i === 2) {
            cellAdd.innerHTML = `<input type="text" placeholder="Vị trí" required class="input-full-width"></input>`
        } else if (i === 3) {
            cellAdd.innerHTML = `<input type="text" placeholder="Lỗi" required class="input-full-width"></input>`
        } else if (i === 4) {
            cellAdd.innerHTML = `<input type="text" placeholder="nội dung" class="input-full-width"></input>`
        } else if (i === 5) {
            cellAdd.innerHTML = `<input type="file" ></input>`
        }

    }
}