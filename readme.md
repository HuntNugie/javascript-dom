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
Merupakan istilah dimana kita