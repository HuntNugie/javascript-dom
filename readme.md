# JAVASCRIPT DOCUMENT OBJECT MODEL(DOM)
Javascript DOM merupakan mempresentasikan element element html sebagai dom tree yang di dalam dom tree mempunyai node yaitu bisa mempresentasikan satu element html,text,attribute dan lain lain 

## Hirarki DOM
- root node -> merupakan sumber dari node node lain atau akar dari node node lain (secara default root node adalah document)
- nodelist -> merupakan kumpulan kumpulan dari banyak node yang berjenis campuran mau itu element atau text dan lain lain
- htmlCollection -> merupakan kumpulan kumpulan node yang hanya berjenis element html saja tidak ada campuran node lain

## DOM SELECTION
Dom selection merupakan istilah dimana kita bisa memilih node dalam dom tree yang kita bisa manipulasi di javascript

### getElementById()
merupakan method yang berfungsi untuk menseleksi atau mencari element html yang mempunyai attribute id yang sesuai 

#### Cara penggunaan
```js
const judul = document.getElementById("judul")
```

> Catatan : getElementById() akan menghasilkan 1 element saja jadi tidak akan mendapatkan hasil lebih dari 1

### getElementsByTagName()
merupakan method yang berfungsi untuk menseleksi atau mencari element html berdasarkan Tag html

#### Cara penggunaan
```js
const paragraph = document.getElementsByTagName("p")
```

> Catatan : getElementsByTagName() akan menghasilkan sebuah htmlCollection dimana htmlCollection sendiri itu array like object jadi bukan array asli

### getElementsByClassName()
merupakan method yang berfungsi untuk menseleksi atau mencari element html berdasarkan attribute class yang sesuai

#### Cara penggunaan
```js
const paragraph1 = document.getElementsByClassName("p1")
```

> Catatan : getElementsByClassName() akan menghasilkan sebuah htmlCollection

### querySelector()
merupakan method yang berfungsi untuk menseleksi atau mencari element html menggunakan selector yang mirip dengan selctor css

#### Cara penggunaan
```js
const li2 = document.querySelector("section#b ul li:nth-child(2)")
```
> Catatan : querySelector() akan menghasilkan 1 saja element html

### querySelectorAll()
merupakan method yang berfungsi untuk menseleksi atau mencari element html mengguynakan selector yang mirip dengan selector css

#### Cara penggunaan
```js
const p = document.querySelectorAll('p')
```
> Catatan : querySelectorAll() akan menghasilkan nodelist(array like object) yang mirp dengan array menggunakan indexing

### mengubah node root
di js dom kita dapat mengubah node root tidak selalu document

#### Contoh
```js
const sectionB = document.getElementById("b")
const p = sectionB .getElementsByTagName("p") // artinya mengambil tag html p di section yang mempunyai id b
```

## DOM MANIPULATION
Merupakan istilah dimana kita dapat memanipulasi element html yang sudah di seleksi 

### innerHTML
berfungsi untuk merubah seluruh isi dari element html bukan hanya text saja tetapi kita dapat menambahkan merangkai element html di dalam nya

#### Cara penggunaan
```js
const judul = document.getElementById("judul") // menginisialisasi selection dom nya terlebih dahulu
judul.innerHTML  = "<i>Nugie kurniawan</i>
```

### style.(propertie)
berfungsi untuk menambahkan styling css di dalam element html dan akan otomatis ditulis secara inline css

#### Contoh penggunaan
```js
judul.style.color = "lime" // ini untuk merubah warna text
judul.style.backgroundColor = "darkGreen" // ini untuk merubah warna dari background color nya
```

### .attribute
berfungsi untuk memanipulasi attribute yang berada di dalam element html yang di seleksi

#### BEBERAPA METHOD YANG DAPAT DI GUNAKAN

#### .setAttribute()
berfungsi untuk menambahkan attribute jika di dalam element html tersebut tidak mempunyai attribute nya jika sudah mempunyai akan menggantikan value dari attribute tersebut

##### Cara penggunaan
```js
judul.setAttribute("name","judul")
```

#### .getAttribute()
berfungsi untuk mendapatkan isi value dari attribute yang ada di dalma element html

##### Cara penggunaan
```js
console.log(judul.getAttribute("id"))
```

#### .removettribute()
berfungsi untuk menghapus attribute yang berada di dalam element html

##### Cara penggunaan
```js
judul.removeAttribute("name")
```

### .classList.method()
berfungsi untuk memanipulasi class yang ada di element html

#### BEBERAPA METHOD YANG DAPAT DI GUNAKAN

#### .classList.add()
berfungsi untuk menambahkan class baru ke dalam class yang ada di element html (**bukan menggantikan class yang sudah ada**)

##### Cara penggunaan
```js
judul.classList.add("biru-muda")
```

#### .classList.remove()
berfungsi untuk menghapus class yang ada di element html

##### Cara penggunaan
```js
judul.classList.remove("biru-muda")
```

#### .classList.toggle()
berfungsi untuk jika class pada element html sudah ada dengan yang di set di method akan menghapus class tersebut dan jika belum ada maka akan menambahkan nya

##### Cara penggunaan
```js
judul.classList.toggle("biru-muda")
```

#### .classList.item()
berfungsi untuk mendapatkan value nilai dari class menggunakan indexing seperti array yang di mulai dari 0

##### Cara penggunaan
```js
console.log(judul.classList.item(0))
```

#### .classList.contains()
berfungsi untuk mengecek apakah suatu class berada di class di element html, akan menghasilkan nilai boolean jika ada akan menghasilkan true dan jika tidak ada maka akan menghasilkan false

#### Cara penggunaan
```js
console.log(judul.classList.contains("biru-muda"))
```

#### .classList.replace()
berfungsi untuk menggantikan class yang ada di element html dengan class yang di set di method

##### Cara penggunaan
```js
judul.classList.replace("biru-muda","pink")
```

### .createElement()
berfungsi untuk membuat element html baru

#### Cara penggunaan
```js
const pBaru = document.createElement("p") // ini artinya buat element baru di document
```

### .createTextNode()
berfungsi untuk menambahkan text node 

#### Cara penggunaan
```js
const text = document.createTextNode("Ini adalah paragraph baru")
```

### parentNode.appendChild()
berfungsi untuk menambahkan node ke dalam parent node dan hanya menerima node saja, jika di dalam paarentNode sudah memiliki node lain di dalmnya maka node yang baru di tambahkan akan mengisi di paling akhir child node yang berada di dalam parent node nya

#### Cara penggunaan
```js
pBaru.appendChild(text) // ini artinya memasukan textNode ke dalam element baru dibuat nya
```

### node.cloneNode()
berfungsi untuk mengcloning element node nya sehingga bisa menduplikasi node tersebut agar bisa di tambahkan ke dalam parent node yang lain karena jika tidak menggunakan cloning seperti ini maka jika kita menambahkan node yang sama di 2 parent yang berbeda maka node tersebut akan berpindah ke parent yang terakhir ia tambahkan jadi bukan cloning maka menggunakan cloneNode bisa menjadi solusi untuk masalah tersebut

#### Cara penggunaan
```js
let clone = pBaru.cloneNode(true) // artinya variabel clone akan berisi node element baru dari pBaru jika parameter di isi dengan true maka akan di cloning berserta seluruh isi child node nya tetapi jika di isi false(secara default false) hanya akan di isi element parent node nya saja tidak dengan child node nya
```

### parentNode.insertBefore()
berfungsi untuk menambahkan node baru di parent node sebelum child node apa di dalam parent node nya, parameter pertama di isi dengan node baru dan parameter ke dua di isi dengan node child nya yang di isi sebelum apa

#### Cara penggunaan
```js
const liBaru = document.createElement("li")
liBaru.textContent = "Ini adalah li Baru"
// tangkap ul nya dan tambahkan element baru ini di paling akhir ul nya
const ul = document.querySelector("section#b ul")
const li2 = ul.querySelector("li:nth-child(2)")
ul.insertBefore(liBaru,li2)
```

### parentNode.removeChild()
berfungsi untuk menghapus child Node yang ada di dalam parent node, dan parameter nya haruslah di isi dengan node

#### Cara penggunaan
```js
sectionA.removeChild(sectionA.querySelector("a"))
```

### parentNode.replaceChild()
berfungsi untuk menggantik node child yang ada di dalam parent node dengan node yang baru

#### Cara penggunaan
```js
const sectionB = document.getElementById("b")
const para = sectionB.querySelector("p")
const h2Baru = document.createElement("h2")
h2Baru.textContent = "Ini adalah judul baru"
sectionB.replaceChild(h2Baru,para)
```