// belajar Dom manipulation

// getElementById() -> element
const judul = document.getElementById("judul")
judul.style.color = "lime"
judul.style.backgroundColor = "#ccc"
judul.innerHTML = "Nugie kurniawan"

// getElementsByTagName() -> htmlCollection
const paragraph = document.getElementsByTagName('p')
//jika ingin menggunakan method method array harus konversi menjadi array karna htmlCollection itu bukan lah array sesungguhnya 
Array.from(paragraph).forEach((e) => {
    e.style.backgroundColor = "lightBlue"
})
// atau menggunakan looping biasa
for(let i = 0; i<paragraph.length;i++){
    paragraph[i].innerHTML = "Ini di ubah dari javascript"
}

// getElementsByClassName() -> htmlCollection
const paragraph1 = document.getElementsByClassName("p1")[0]
paragraph1.innerHTML = "Ini mempunyai class p1"