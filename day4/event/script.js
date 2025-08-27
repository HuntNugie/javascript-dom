// Belajar events
// event merupakan kejadian disaat user melakukan sesuatu seperti mengklik mouse, mengetik keyboard dan lain lain

// membuat paragraph ke 3 saat di klik itu berubah warna nya

// event Handler
// event handler merupakan sebuah events di javascript untuk menjalankan sesuatu saat user melakukan apapun di website kita dengan ada 2 jenis event handler yaitu inline html dan element method

// tangkap paragraph ke 3
const p3 = document.getElementsByClassName("p3")[0]
// menggunakan inline html
function ubahWarna(){
    p3.classList.toggle("biru")
}
const p2 = document.querySelector(".p2")

// menggunakan method
function ubah(){
    p2.style.backgroundColor = "lightblue"
}
p2.onclick = ubah

const ul = document.querySelector("section#b ul")
// menggunakan addEventListener
// secara definisi dan fungsi sama seperti event Handler hanya saja dalam bentuk syntax dan ada perbedaan antara keduanya
document.querySelector("section#b p").addEventListener("click",(e)=>{
    let baru = document.createElement("li")
    baru.textContent = "baru"
    ul.appendChild(baru)
})

// perbedaan menggunakan event handler dengan addEventListener adalah jika melakukan dua events secara bersamaan dan menggunakan jenis event yang sama maka saat menggunakan event handler akan menimpa menjadi hanya menggunakan event yang terbaru nya saja itu berbeda saat menggunakan addEventListener tidak akan menimpa event yang sebelumnya sudah jalan tetapi akan menambahkan dan menjadikan jalan secara bersamaan