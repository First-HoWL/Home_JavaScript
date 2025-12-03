var products = [
    {
        id: 0,
        price: 10,
        name: "potato",
        foto: "https://images.apollo247.in/pd-cms/cms/2025-05/AdobeStock_1291706602_Preview.webp?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
        quantity: 1, 
        //bought: false
    },
    {
        id: 1,
        price: 15,
        name: "tomato",
        foto: "https://foodcare.in/cdn/shop/files/tomatoes-canva.webp?v=1725364526",
        quantity: 1, 
        //bought: true
    },
    {
        id: 2,
        price: 120,
        name: "keyboard Ajazz AK680",
        foto: "https://content.rozetka.com.ua/goods/images/big/584386362.png",
        quantity: 1, 
        //bought: true
    },
    {
        id: 3,
        price: 140,
        name: "keyboard Ajazz AK820",
        foto: "https://content1.rozetka.com.ua/goods/images/big/522916518.jpg",
        quantity: 1, 
        //bought: false
    }
]

var basket = []




function randint(a, b){
    return Math.floor(Math.random() * (b-a)) + a
}


document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("darkTheme")
    console.log("theme: " + theme);
    if(theme != null && theme == "true"){
        document.querySelector("input#themeSwitch").setAttribute("checked", true)
        document.querySelector("#max_div").classList.add("theme-dark")
    }

    document.querySelector("input#themeSwitch")
    .addEventListener("click", (event) =>{
        let darkTheme = event.target.checked
        if(darkTheme) document.querySelector("#max_div").classList.add("theme-dark")
        else document.querySelector("#max_div").classList.remove("theme-dark")

        localStorage.setItem("darkTheme", darkTheme)
    })

})







// Homework


function Update(updBatton){
    let shopGenDiv = document.querySelector("div#shopGenDiv")
    shopGenDiv.querySelectorAll("div").forEach((item)=>{
        item.remove()
    })
    basket.forEach((item) =>{
        let shopGenDiv = document.querySelector("div#shopGenDiv")
        let div = document.createElement("div")
        let img = document.createElement("div")
        let button = document.createElement("button")
        img.style.backgroundImage = `url(${item.foto})`
        img.classList.add("foto")
        let name = document.createElement("span")
        name.textContent = item.name
        let quantity = document.createElement("span")
        quantity.textContent = item.quantity + "pcs"
        let price = document.createElement("span")
        price.textContent = item.price + "$"

        button.id = item.id
        button.textContent = "Delete"
        button.addEventListener("click", (event)=>{
            let a = products.filter((item) => item.id == event.target.id)[0]
            let b = basket.filter((item) => item.id == event.target.id)[0]
            console.log("id: " + event.target.id)
            console.log("obj: " + a)
            if(parseInt(b.quantity) <= 1){
                let c = basket.indexOf(b)
                basket.splice(c, 1)
            }
            else{
                b.quantity -= 1
            }
            Update(false)
        })

        div.append(img, name, quantity, price, button)
        
        shopGenDiv.append(div)
        
    })
    if(updBatton){
        document.querySelector("button#basket").removeEventListener("click", () => Update(true))
        document.querySelector("button#basket").addEventListener("click", () => onStart())  
    }

}


function onStart(){
    let shopGenDiv = document.querySelector("div#shopGenDiv")
    shopGenDiv.querySelectorAll("div").forEach((item)=>{
        item.remove()
    })
    products.forEach((item) =>{
        let shopGenDiv = document.querySelector("div#shopGenDiv")
        let div = document.createElement("div")
        let img = document.createElement("div")
        let button = document.createElement("button")
        img.style.backgroundImage = `url(${item.foto})`
        img.classList.add("foto")
        let name = document.createElement("span")
        name.textContent = item.name
        let price = document.createElement("span")
        price.textContent = item.price + "$"
        button.id = item.id
        button.classList.add("buy") 
        button.textContent = "Buy"
        button.addEventListener("click", (event)=>{
            let a = products.filter((item) => item.id == event.target.id)[0]
            let b = basket.filter((item) => item.id == event.target.id)[0]
            console.log(event.target.id)
            console.log(a)
            console.log(b)

            if(b === null || b === undefined){
                let product = {
                    id: a.id,
                    price: a.price,
                    name: a.name,
                    foto: a.foto,
                    quantity: a.quantity, 
                }
                basket.push(product)
            }
            else{
                b.quantity += 1
            }

            console.log(basket)
        })

        div.append(img, name, price, button)
        
        shopGenDiv.append(div)
        
    })
    document.querySelector("button#basket").removeEventListener("click", () => onStart())
    document.querySelector("button#basket").addEventListener("click", () => Update(true))
}



document.addEventListener("DOMContentLoaded", ()=>{

    onStart()

})

