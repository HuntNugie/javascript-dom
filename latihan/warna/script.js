const btn = document.querySelector("button")

btn.addEventListener("click",() => {
    document.body.classList.toggle("bg-green-700")
})

const tombolBaru = document.createElement("button")
tombolBaru.textContent = "Klik saya tombol baru"
tombolBaru.classList.add("rounded-full")
tombolBaru.classList.add("bg-red-300")
tombolBaru.classList.add("p-3")
tombolBaru.classList.add("mt-10")
tombolBaru.classList.add("ml-2")
tombolBaru.setAttribute("type","button")
btn.after(tombolBaru)
let angkaAcak = function(){
    return Math.floor(Math.random() * 255)
}
tombolBaru.addEventListener("click",() => {
    let merah = angkaAcak()
    let biru = angkaAcak()
    let hijau = angkaAcak()

    document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
})

// const merah = document.querySelector("input[name=merah]")
// const biru = document.querySelector("input[name=biru]")
// const hijau = document.querySelector("input[name=hijau]")
// let hasilMerah = 0;
// let hasilBiru = 0;
// let hasilHijau = 0;

let ubahRgb = function(merah,hijau,biru){
    document.body.style.backgroundColor = `rgb(${merah},${hijau},${biru})`
}
// merah.addEventListener("input",(e) => {
//     hasilMerah = parseInt(e.target.value)
//     ubahRgb()

// })
// biru.addEventListener("input",(e) => {
//     hasilBiru = parseInt(e.target.value)
//     ubahRgb()
// })
// hijau.addEventListener("input",(e) => {
//     hasilHijau = parseInt(e.target.value)
//     ubahRgb()
// })

const inputan = document.querySelectorAll("input")
for(let i = 0; i<inputan.length;i++){
    inputan[i].addEventListener("input",function(){
        ubahRgb(inputan[0].value,inputan[1].value,inputan[2].value)
    })
}
document.body.addEventListener("mousemove",(e) => {
    let postX = (e.clientX / window.innerWidth) * 255
    let postY = (e.clientY/window.innerHeight) * 255
    let random = Math.floor(Math.random() * 255)
    ubahRgb(postX,postY,random)
})