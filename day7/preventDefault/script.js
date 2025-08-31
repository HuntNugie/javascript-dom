// prevent default merupakan sebuah method yang berfungsi untuk mengagalkan atau tidak menjalankan aksi default dari element (biasanya untuk perpindahan halaman atau pengiriman data dll)

const link = document.querySelectorAll(".close")

link.forEach((e) => {
    e.addEventListener("click",(el)=>{
        el.preventDefault()
        el.target.parentElement.remove()
    })
})

