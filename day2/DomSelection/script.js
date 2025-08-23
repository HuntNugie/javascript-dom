// Dom selection

// querySelector () -> element
// berfungsi untuk mencari/mendapatkan/menseleksi element html dengan selector dan selctor tersebut bisa menggunakan selector yang di gunakan di css
// akan mengembalikan 1 element html saja

const p1 = document.querySelector('.p1')
p1.innerHTML = "Nugie kurniawan"

// bisa mengubah node root 
const sectionB = document.getElementById("b")
const li2 = sectionB.querySelector('ul li:nth-child(2)') 
li2.style.backgroundColor = "green"

// querySelectorAll() -> nodelist
// berfungsi untuk mencari/mendapatklan/menseleksi element html dengan selector mirip dengan querySelector()
// akan menghasilkan nodelist yang berbentu Array like object jadi bukan array asli tetapi berbentuk mirip seperti array mempunyai indexing yang di mulai dari 0
const sectionA = document.getElementById('a')
const p = sectionA.querySelectorAll('p')
// bisa menggunakan konversi array agar bisa menggunkan method array
Array.from(p).forEach((e) => {
    e.style.backgroundColor = "orange"
})
// bis menggunakan looping
for(let i = 0; i<p.length;i++){
    p[i].style.color = "lightblue"
}
// bisa menggunakan indexing jika ingin menseleksi 1 saja
p[0].innerHTML = "Nugie kurniawan"