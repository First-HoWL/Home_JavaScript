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

function firstfunc(numb){
    let sum = 0;
    for(let i = 0; i < numb; i++){
        if(numb % i == 0){
            sum += i
        }
    }   
    return (sum == numb)
}

function secfunc(numbers){
    let numbb = []
    for(let i = numbers[0], j; i < numbers[1]; i++){
        if(firstfunc(i) == true)
            numbb.push(parseInt(i));
    }
    return numbb
}

function thirdfunc(numbers){
    return (numbers[0] * 3600) + (numbers[1] * 60) + numbers[2]
}

function main(){
    let select = document.querySelector("select#select")
    let input = document.querySelector("input#inputHomework")
    console.log(select.value)
    let selected = select.value
    let inputValue = input.value

    if(selected == 1){
        alert(firstfunc(inputValue))
    }
    if(selected == 2){
        let numbers = []
        for (let i = 0; i < 2; i++){
            numbers[i] = parseInt(inputValue.split(" ")[i])
        }
        console.log(numbers)
        alert(secfunc(numbers))
    }
    if(selected == 3){
        let numbers = []
        for (let i = 0; i < 3; i++){
            numbers[i] = parseInt(inputValue.split(" ")[i])
        }
        console.log(numbers)
        alert(thirdfunc(numbers))
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    let select = document.querySelector("select#select")
    let input = document.querySelector("input#inputHomework")


    select.addEventListener("change", (event)=>{
        let selected = select.value
        if(selected == 1){
            input.placeholder = "numb"
        }
        if(selected == 2){
            input.placeholder = "numb numb"
        }
        if(selected == 3){
            input.placeholder = "h min sec"
        }
    })

})

