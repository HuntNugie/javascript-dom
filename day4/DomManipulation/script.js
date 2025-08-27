// Dom manipulation part 2

// membuat element html baru di javascript

// createElement()
// berfungsi untuk membuat element baru di javascript
const pBaru = document.createElement("p") // ini artinya buat element baru di document

// createTextNode()
// berfungsi untuk membuat text untuk node element html nya
const text = document.createTextNode("Ini adalah paragraph baru")

// menggabungkan element dengan teks nya
// appenChild()
// berfungsi untuk memasukkan apapun ke dalam node nya sebagai anak dari node parent nya
// dan appendChild akan memasukan ke element paling akhir jika di dalam nya sudah ada elemnet lain jadi tidak akan mengganti element yang sudah ada
pBaru.appendChild(text) // ini artinya memasukan text ke dalam element baru dibuat nya
document.getElementById("a").appendChild(pBaru) // ini artinya akan menambahkan element baru sebagai anak dari parent node nya
// document.getElementById("b").appendChild(pBaru) // dan jika kita coba tambahkan element baru nya ke node lain maka element baru tersebut akan di pindahkan bukan lah di copy 

// jika ingin membuat 2 element yang sama kita bisa membuat clone nya dengan
// cloneNode()
// berfungsi untuk membuat copy dari node agar bisa kita tambahkan di element node yang lain sehingga element tersebut tidak akan pindah dan jadi duplikasi
let clone = pBaru.cloneNode(true)
document.getElementById("b").appendChild(clone) 

// mencoba membuat li baru
// membuat li baru dan menambahkan text di dalamnya
const liBaru = document.createElement("li")
liBaru.textContent = "Ini adalah li Baru"

// tangkap ul nya dan tambahkan element baru ini di paling akhir ul nya
const ul = document.querySelector("section#b ul")
const li2 = ul.querySelector("li:nth-child(2)")
// ul.appendChild(liBaru)
// jika ingin menyisipkan setelah item 1
// insertBefore()
// berfungsi sebagai untuk menambahkan node  ke dalam parent node tetapi sebelum child apa dan menentukan child nya itu menggunakan node
ul.insertBefore(liBaru,li2)

// removeChild()
// berfungsi untuk menghapus node child yang berada di parent node
const sectionA = document.getElementById("a")
sectionA.removeChild(sectionA.querySelector("a"))

// replaceChild()
// berfungswi untuk mengganti child yang ada di parent node dengan child node yang baru

const sectionB = document.getElementById("b")
const para = sectionB.querySelector("p")
const h2Baru = document.createElement("h2")
h2Baru.textContent = "Ini adalah judul baru"
sectionB.replaceChild(h2Baru,para)