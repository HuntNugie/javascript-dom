// event bubbling merupakan istilah untuk dimana javascript itu akan mencari dan menjalankan event dari element child sampai parent paling luar yang tidak mempunyai parent lagi

// cara pertama kurang efektif
// const cards = document.querySelectorAll(".card")
// cards.forEach((card)=>{
//     card.addEventListener("click",function(el){
        
//         alert(el.target.className)
//     })
// })


// const close = document.querySelectorAll(".close")
// close.forEach((e) => {
//     e.addEventListener("click",function(el){
//         el.target.parentElement.remove()
//         el.preventDefault()
//         el.stopPropagation()//ini berfungsi untuk mencegah fungsi event dari sifat event bubble jadi hanya fungsi event ini yang akan berjalan
//     })
// })

// cara kedua lebih efektif
const container = document.querySelector(".container")

container.addEventListener("click",function(event){
    if(event.target.className == "close"){
        event.target.parentElement.remove()
    }
})

// jika kita menseleksi child node nya mungkin bisa saja tetapi ada problem dimana jika nanti ada element yang bertambah event nya tidak akan mengikuti child node yang kita seleksi sehingga lebih pas menggunakan sifat event bubbling dan method target untuk mendapatkan child node dan kita bisa memanipulasi walaupun child nodenya element baru