// menangkap pilihan gambar

// cara pertama
// const pilihan = document.querySelectorAll("#pilihan div img")
// // tangkap gambar utama nya
// const gambar = document.querySelector("img")
// // trus kita ambil pilihan target nya
// pilihan.forEach((e)=>{
    
//     e.addEventListener("click",(el)=>{
//         // ambil src nya
//         let src = el.target.getAttribute("src")
//         // ubah src gambar utama dengan src yang kita pilih
//         gambar.setAttribute("src",src)
//         for(let i = 0;i<pilihan.length;i++){
//             // cek jika ada yang mempunyai class active maka hapus
//             if(pilihan[i].parentElement.classList.contains("opacity-50")){
//                 pilihan[i].parentElement.classList.remove("opacity-50")
//             }
//         }
//         // tambahkan class opacity-50 ke yang di pilih
//         el.target.parentElement.classList.add("opacity-50") 
//     })
// })

// cara kedua event delegation
const container = document.querySelector(".container")
const gambar = document.querySelector("img")
const pilihan = document.querySelectorAll("#pilihan div")
container.addEventListener("click",function(event){
    // cek apakah yang di klik adalah gambar pilihan
    if(event.target.classList.contains("object-contain") && event.target.parentElement.parentElement.getAttribute("id") == "pilihan"){
        gambar.setAttribute("src",event.target.getAttribute("src"))
    }
    pilihan.forEach((e) => {
        // jika ada opacity-50 hapus
        if(e.classList.contains("opacity-50")){
            e.classList.remove("opacity-50")
        }
    })
    event.target.parentElement.classList.add("opacity-50")
})