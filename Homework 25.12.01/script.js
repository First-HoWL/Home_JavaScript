function bubblesort(array){
    let is_changed = true;
    while (is_changed){
        is_changed = false;
        for (let i = 0; i < array.length - 1; i++){
            if (array[i] > array[i + 1]){
                let a = array[i];
                array[i] = array[i + 1];
                array[i + 1] = a;
                is_changed = true;
            }
        }
    }
    return array;
}


function randint(a, b){
    return Math.floor(Math.random() * (b-a)) + a
}




function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, attributes = {}) {

  attributes = {
    path: '/',
    // за потреби додайте інші типові значення
    ...attributes
  };

  if (attributes.expires instanceof Date) {
    attributes.expires = attributes.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let attributeKey in attributes) {
    updatedCookie += "; " + attributeKey;
    let attributeValue = attributes[attributeKey];
    if (attributeValue !== true) {
      updatedCookie += "=" + attributeValue;
    }
  }

  document.cookie = updatedCookie;
}

















var IsBasketOpened = false



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
          let a1 = getCookie("cart") === undefined ? "{}" : getCookie("cart")

          let cart = JSON.parse(a1)
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
          setCookie("cart", JSON.stringify(basket), {"max-age":86000})
          getCartTotal()
          Update(false)
        })

        div.append(img, name, quantity, price, button)
        
        shopGenDiv.append(div)
        IsBasketOpened = true
    })
    if(updBatton){
        document.querySelector("button#basket").removeEventListener("click", () => Update(true))
        document.querySelector("button#basket").addEventListener("click", () => onStart()) 
        IsBasketOpened = true
    }

}


function onStart(){
    let shopGenDiv = document.querySelector("div#shopGenDiv")
    shopGenDiv.querySelectorAll("div").forEach((item)=>{
        item.remove()
    })
    try{
    let a = getCookie("cart")
    basket = JSON.parse(a)

    }
    catch{
      basket = []
    }

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
          try{
          let a = getCookie("cart")
          basket = JSON.parse(a)

          }
          catch{
            basket = []
          }
          let a = products.filter((item) => item.id == event.target.id)[0]
          console.log(basket)
          let b = []
          try{
            b = basket.filter((item) => item.id == event.target.id)[0]
          }
          catch{
            b = null
          }
          console.log(event.target.id)
          console.log(a)
          console.log(b)
          console.log(basket)

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
          setCookie("cart", JSON.stringify(basket), {"max-age":86000})

          console.log(basket)
          getCartTotal()
        })

        div.append(img, name, price, button)
        
        shopGenDiv.append(div)
        
    })
    document.querySelector("button#basket").removeEventListener("click", () => onStart())
    document.querySelector("button#basket").addEventListener("click", () => Update(true))
    IsBasketOpened = false
}

function getCartTotal(){
  try{
    let a = getCookie("cart") === undefined ? "{}" : getCookie("cart")

    let cart = JSON.parse(a)
    let total = 0;
    cart.forEach(product =>{
      total += product.price * product.quantity
    })
    document.querySelector("span.cart-total").textContent = total + "$"
  }
  catch{
    console.log()
    document.querySelector("span.cart-total").textContent = 0 + "$"
  }
  
}



let id = 0;
document.addEventListener("DOMContentLoaded", ()=>{
    let theme = localStorage.getItem("darkTheme")
    console.log("theme: " + theme);
    if(theme != null && theme == "true"){
        document.querySelector("input#themeSwitch").setAttribute("checked", true)
        document.querySelector("#max_div").classList.add("theme-dark")
    }

    // setInterval(()=>{
    //   // https://meowfacts.herokuapp.com/?count=10&lang=ukr
    //   let CatFacts = document.querySelector("div#CatFacts")
    //   fetch("https://meowfacts.herokuapp.com/?count=1&lang=ukr")
    //   .then(response => response.json())
    //   .then(data => {
    //     let p = document.createElement("p")
    //     let CatFacts = document.querySelector("div#CatFacts")
    //     p.id = "d" + id++;
    //     p.textContent = data.data
    //     CatFacts.prepend(p)
    //     console.log(data.data)
    //   })
    //   let i = 0;
    //   while(CatFacts.children.length > 5){
    //     let a = CatFacts.lastChild
    //     if(a !== null)
    //       a.remove()
    //   }
    //   console.log(CatFacts.children.length)
    //   console.log(CatFacts.children)

    // }, 5000)
    
    // fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json").then(response => response.json()).then(data =>
    //   {for(code in data){
    //     let option = document.createElement("option")
    //   option.textContent = data[code]
    //   option.value = code
    //   document.querySelector("#countrySelect").append(option)
    //   }
    // })

  // document.querySelector("button#AddServer").addEventListener("click", (event) =>{
  //   let inputVal = document.querySelector("input#IpServer").value
  //   if(inputVal.value != ""){
  //     // https://api.mcsrvstat.us/3/

  //     fetch(`https://api.mcsrvstat.us/3/${inputVal}`).then(response => response.json())
  //     .then(data =>{
  //       console.log(data)
  //       let template = document.querySelector("section#Servers>template")
  //       let serverBlock = template.content.cloneNode(true)
  //       if(data.online == true){
  //         serverBlock.querySelector("img").src = data.icon
  //         serverBlock.querySelector("span.IP").textContent = data.hostname +"(" + data.ip + ")"
  //         serverBlock.querySelector("p").innerHTML = data.motd.html == undefined ? "" : data.motd.html
  //         serverBlock.querySelector("span.online").textContent = data.players.online + "/" + data.players.max
  //         serverBlock.querySelector("span.isOnline").textContent = data.online == true ? "online" : "offline"
  //       }
  //       else{
  //         serverBlock.querySelector("img").src = "offline.bmp"
  //         serverBlock.querySelector("span.IP").textContent = data.hostname +"(" + data.ip + ")"
  //         //serverBlock.querySelector("p").innerHTML = data.motd.html == undefined ? "" : data.motd.html
  //         //serverBlock.querySelector("span.online").textContent = data.players.online + "/" + data.players.max
  //         serverBlock.querySelector("span.isOnline").textContent = data.online == true ? "online" : "offline"
        
  //       }
  //       document.querySelector("section#Servers").prepend(serverBlock)
  //      })

  //   }
  // })

  setInterval(()=>{
    let a = getCookie("cart") === undefined ? "{}" : getCookie("cart")

    let cart = JSON.parse(a)
    //basket = JSON.parse(getCookie("cart"))
    if(JSON.stringify(cart) != JSON.stringify(basket)){
      
      basket = cart
      getCartTotal()
      if(IsBasketOpened)
        Update(false)
      else{
        onStart()
      }
      console.log("Nice!")
    }
    else{
      console.log("OK!")
    }


  }, 5000)


  let a = getCookie("cart") === undefined ? "{}" : getCookie("cart")

    let cart = JSON.parse(a)

  getCartTotal()


  onStart()


  document.querySelector("input#themeSwitch")
  .addEventListener("click", (event) =>{
      let darkTheme = event.target.checked
      if(darkTheme) document.querySelector("#max_div").classList.add("theme-dark")
      else document.querySelector("#max_div").classList.remove("theme-dark")

      localStorage.setItem("darkTheme", darkTheme)
  })


})


