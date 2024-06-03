
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


let users = [
    {
        id: 1,
        user: 'huunq',
        password: '123',
        passwordDefault: 'abc', // mật khẩu mặc định
        fullname: 'Ngô Quốc Hữu',
        department: 'IT', //bộ phận
        permission: 'administrator', //quyền hạn
    },
    {
        id: 2,
        user: 'user',
        password: '123',
        passwordDefault: 'abc', // mật khẩu mặc định
        fullname: 'Người dùng 1',
        department: 'KyThuat', //bộ phận
        permission: 'user', //quyền hạn
    },
    {
        id: 3,
        user: 'user2',
        password: '123',
        passwordDefault: 'abc', // mật khẩu mặc định
        fullname: 'Người dùng 2',
        department: 'KyThuat', //bộ phận
        permission: 'admin', //quyền hạn
    }
]


let deviceOptions = ['Máy tính', 'Máy quét mã vạch', 'Máy in/intem/photo', 'Tivi', 'Màn hình máy tính', 'bán phí/chuột', 'camera', 'internet'];
let locationOptions = ['Văn phòng nhà ăn', 'Nhà ăn', 'VP kế toán', 'Lò mountain', 'Lò Fulltime', 'Lò Yuegao', 'Kho VT', 'Kho NL', 'Hộp', 'VP Hôp', 'EI', 'Mài cây tự động', 'Mài cây số 9', 'Mài cây số 10', 'Song cạnh 1-2', 'Song cạnh 3-4', 'Cắt Disai', 'Căt Intermac', 'Truyền dán 1', 'Truyền dán 2', 'Truyền dán 3'];
let errorDevice = ['Không lên hình', 'Không quét được', 'In lỗi']

let btnAdd = document.querySelector('.btn-add');
let btnConfirm = document.querySelector('.btn-confirm');
// console.log(btnConfirm);
let errorAll = Array.from(document.querySelectorAll('#content .content-error')) // mảng các bảng lỗi tưng ứng của từng item list
// console.log(errorAll);
let sidebarMenuList = Array.from(document.querySelectorAll('#container .sidebar__menu .list-style')) // mảng các item list 
// console.log(sidebarMenuList);
// let errorTable = document.querySelector('.content-error .content__table'); // thẻ table
// console.log(errorTable);
let processingTale = document.querySelector('.content-processing .content__table');
let processingColum = document.querySelectorAll('.content-processing .content__table .colum')

let sidebarMenu = document.querySelector('#container .sidebar__menu')
// console.log(sidebarMenu);
let errorBodyColum = Array.from(document.querySelectorAll('.content-error .error-body td')); // gọi mảng thẻ td trong tbody - hiện tại là mảng rỗng



// // tạo danh sách datalist để liên kết với thuộc tính list của thẻ input
// function createDataList(id, options) {
//     let dataList = document.createElement('datalist'); // tạo thêm 1 thẻ datalist vào document được gán cho biến dataList khi gọi về từ document
//     dataList.id = id; // thêm thuộc tính id với id nhập vào từ hàm createDataList(id,options)
//     options.forEach(option => { //lặp qua các element bên trong mảng options từ hàm createDataList(id,options)
//         let optionElement = document.createElement('option'); //tạo 1 thẻ option mỗi lần lặp qua option và đưa vào document. thẻ này sẽ được gán cho biến optionElement
//         optionElement.value = option; // thêm thuộc tính value cho thẻ option thông qua biến optionElement 
//         dataList.appendChild(optionElement); //đưa thẻ option vào trong thẻ datalist với mỗi lần lặp thông qua hàm appendChild
//     });
//     document.body.appendChild(dataList); // đưa thẻ datalist vào trong thẻ body 
// }

// createDataList('deviceOptions', deviceOptions); // nhập id và option cho hàm createDataList
// createDataList('locationOptions', locationOptions);
// createDataList('errorDevice', errorDevice);


// // tạo danh sách datalist để liên kết với thuộc tính list của thẻ input

createDataList = (id, options) => {
    let dataList = document.createElement('datalist');
    dataList.id = id;
    options.forEach(option => {
        let optionElement = document.createElement('option');
        optionElement.value = option;
        dataList.appendChild(optionElement);
    });
    document.body.appendChild(dataList);
}

createDataList('deviceOptions', deviceOptions);
createDataList('locationOptions', locationOptions);
createDataList('errorDevice', errorDevice);

// lựa chọn loại thiết bị báo lỗi
sidebarMenuList.forEach((listError, index) => {
    let indexList = index;
    listError.onclick = function () {
        errorAll.forEach((tableError, index) => {
            let indextableError = index;

            if (indexList === indextableError) {
                tableError.style.display = 'block'

                let errorColum = Array.from(tableError.querySelectorAll('.content-error .content__table td'));
                console.log(errorColum);
                let errorTable = document.querySelector('.content-error .content__table'); // thẻ table
                console.log(errorTable);
                let errorBody = document.querySelector('.content-error .error-body') // thẻ tbody
                console.log(errorBody);
                // thêm hàng cột, xuống thẻ tbody
                btnAdd.onclick = function () {
                    let newRow = errorBody.insertRow();
                    let rowCount = errorTable.rows.length; // trả về leng của hàng tính cả hàng tr và tbody
                    for (let i = 0; i < errorColum.length; i++) {
                        let cellAdd = newRow.insertCell(i)
                        if (i === 0) {
                            cellAdd.innerHTML = rowCount - 1
                        } else if (i === 1) {
                            cellAdd.innerHTML = `<input type="text" placeholder="Nhập" required list="deviceOptions" class="input-full-width"></input>`
                        } else if (i === 2) {
                            cellAdd.innerHTML = `<input type="text" placeholder="Vị trí" required list="locationOptions" class="input-full-width"></input>`
                        } else if (i === 3) {
                            cellAdd.innerHTML = `<input type="text" placeholder="Lỗi" required list="errorDevice" class="input-full-width"></input>`
                        } else if (i === 4) {
                            cellAdd.innerHTML = `<input type="text" placeholder="nội dung" class="input-full-width"></input>`
                        } else if (i === 5) {
                            cellAdd.innerHTML = `<input type="file" ></input>`
                        }

                    }
                }
            } else {
                tableError.style.display = 'none'
            }
        })
    }
})


// tạo function xử lý ad row và colum

addContentError = (contentErrorElement) => {

}


console.log(document.querySelectorAll('.content-error')); 