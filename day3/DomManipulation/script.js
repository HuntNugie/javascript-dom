// Dom Manipulation merupakan istilah dimana kita dapat mememanipulasi dari element html yang kita sudah tangakap/seleksi

// ada berberapa contoh dom manipulation

// .innerHTML
// berfungsi untuk merubah struktur yang berada di dalam element html yang kita tangkap, kita bisa membuat struktur baru atau hanya sekedar menambahkan text
const judul = document.getElementById('judul')
judul.innerHTML = "Nugie kurniawan" // ini artinya kita menangambil element html yang mempunyai id judul dan kita ubah struktur isi nya di ganti menjadi "Nugie kurniawan"

// .style.<properti>
// berfungsi untuk menambahkan style css pada element html dan akan menjadi inline css
judul.style.color = "lime" // ini artinya kita mengambil element html #judul dan kita tambahkan inline css tambahkan warna text menjadi lime
judul.style.backgroundColor = "darkGreen" 

// .attribute
// berfungsi untuk memanipulasi attribute yang berada di dalam element html
// ada beberapa method untuk manipulasi attribute ini

// .setAttribute()
// berfungsi untuk menambahkan attribute baru di element html
// arguments pertama itu attribute apa yang akan di tambah dan arguments kedua adalah nilai dari attribute tersebut
judul.setAttribute("name","judul")

// .getAttribute()
// berfungsi untuk mendapatkan isi dari attribute pada element html
// argument nya hanya di isi dari nama attribute nya dan akan menghasilkan isi dari attribute yang kita cari
console.log(judul.getAttribute("name"))

// .removeAttribute
// berfungsi untuk menghapus attribute yang berada di element html
// argument  nya hanya di isi dari nama attribute tersebut 
judul.removeAttribute("name")

// .classList
// berfungsi untuk memanipulasi class yang ada di dalam element html
// ada beberapa method untuk classList

// .classList.add()
// berfungsi untuk menambahkan class baru pada element html sehingga jika sebelumnya sudah ada class tidak akan menimpa class yang sudah ada tetapi menambah class 
const p2 = document.querySelector(".p2")
p2.classList.add("biru-muda")

// classList.remove()
// berfungsi untuk menghapus class yang ada pada element html
p2.classList.remove("biru-muda")

// classList.toggle()
// berfungsi untuk jika di elemnt html tersebut sudah ada class yang di set maka akan menghapus class tersebut dan jika di element html tersebut tidak ada class yang di set tersebut maka akan menambahkan nya
p2.classList.toggle("biru-muda")

// classList.item()
// berfungsi untuk mencari nilai dari class jika class tersebut memiliki banyak nilai maka untuk mencari satu nilai di class tersebut kita bisa menggunakan method ini dengan menginputkan nya seperti indexing pada array dimulai dari 0
console.log(p2.classList.item(1))

// classList.contains()
// berfungsi untuk mengecek apakah suatu class ada di dalam class di element html yang di maksud dan akan menghasilkan nilai boolean true or false
console.log(p2.classList.contains("biru-muda"))

// classList.replace()
// berfungsi untuk mengganti class yang ada pada di element html di ganti dengan yang di set
p2.classList.replace("biru-muda","merah")