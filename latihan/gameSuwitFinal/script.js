// game suwit jawa
// gajah kalah lawan semut, semut kalah lawan manusia, manusia kalah lawan gajah

// mendapatkan pilihan user
// const gajah = document.querySelector(".gajah")
// const orang = document.querySelector(".orang")
// const semut = document.querySelector(".semut")
const pilihan = document.querySelectorAll("li img")
const info = document.querySelector(".info")
let user;

pilihan.forEach((e) => {
    e.addEventListener("click",(el) => {
        user = el.target.className
        comp = pilComp()
        
        putar()
        setTimeout(() => {
         
            ubahImage(comp)
            let hasil = tanding(user,comp)
            info.textContent = hasil
        
        },1500)
    })
})

function putar(){
    let gambar;
    let counter = 0;
    let berhenti = false
    setTimeout(()=>{
           berhenti = true
    },1500)
    setInterval(()=>{
        if(counter>=pilihan.length){
            counter = 0
        }
        if(berhenti){
            clearInterval()
            return true
        }
        
        document.querySelector(".img-komputer").setAttribute("src",pilihan[counter++].getAttribute("src"))
    },100)
}
// gajah.addEventListener("click",(e) => {
//     user = "gajah"
//     comp = pilComp()
//     ubahImage(comp)

//     let hasil = tanding(user,comp)
//     info.textContent = hasil

// })

// orang.addEventListener("click",() => {
//     user = "orang"
//     comp = pilComp()
//     ubahImage(comp)

//     let hasil = tanding(user,comp)
//     info.textContent = hasil
// })

// semut.addEventListener("click",() => {
//     user = "semut"
//     comp = pilComp()
//     ubahImage(comp)

//     let hasil = tanding(user,comp)
//     info.textContent = hasil
// })

// pilihan computer
let komp;
function pilComp(){
    komp = Math.floor(Math.random() * 3)+1
    switch (komp){
        case 1:
            komp = "semut"
        break;
        case 2:
            komp = "gajah"
        break;
        case 3:
            komp = "orang"
        break;
    }
    return komp
}

// fungsi untuk merubah image dari computer
function ubahImage(pilihan){
    document.querySelector(".img-komputer").setAttribute("src",`img/${pilihan}.png`)
}

// fungsi untuk aturan
function tanding(user,comp){
    let hasil
    if(user == comp){
        hasil = "seri"
    }else{
        if(user == "gajah"){
            hasil = (comp == "semut") ? "kalah" : "menang"
        }else if(user == "semut"){
            hasil = (comp == "orang") ? "kalah" : "menang"
        }else{
            hasil = (comp == "gajah") ? "kalah" : "menang"
        }
    }
    return hasil
}