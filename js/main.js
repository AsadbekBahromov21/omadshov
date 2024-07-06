const title = document.querySelector(".title")
const btn = document.querySelector(".btn")
const TEL_NUMBERS = [
    "+998 99 444 24 43",
    "+998 99 324 43 23",
    "+998 93 434 54 32",
    "+998 91 324 43 56",
    "+998 90 321 43 54",
    "+998 99 616 16 21",
    "+998 50 009 16 21",
    "+998 77 075 75 01",
    "+998 93 833 16 21",
]
btn.addEventListener("click", ()=>{
    let interval = setInterval(()=>{
        let index = Math.floor(Math.random() * TEL_NUMBERS.length)
        title.textContent = TEL_NUMBERS[index]
    },100)
    setTimeout(() =>{
        clearInterval(interval)

    },2500)
})
