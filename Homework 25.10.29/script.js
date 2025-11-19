function main(){
    let select = document.querySelector("select#select");
    console.log(select.value);
    let selected = select.value;
    if(selected == 1){
        let age = prompt("age:");
        console.log(age)
        if(age < 13)
            alert("Kid");
        else if(age < 20)
            alert("teenagger");
        else if(age < 60)
            alert("adult");
        else 
            alert("pensioner");
    }
    if(selected == 2){
        let text = prompt("symbol:");
        console.log(text)
        if(text == 1)
            alert("!")
        if(text == 2)
            alert("@")
        if(text == 3)
            alert("#")
        if(text == 4)
            alert("$")
        if(text == 5)
            alert("%")
        if(text == 6)
            alert("^")
        if(text == 7)
            alert("&")
        if(text == 8)
            alert("*")
        if(text == 9)
            alert("(")
        if(text == 0)
            alert(")")
    }
    if(selected == 3){
        let text = parseInt(prompt("number:"));
        console.log(text)
        console.log(Math.trunc(text / 100))
        console.log(Math.trunc(text / 10) % 10)
        console.log(text % 10)
        if (Math.trunc(text / 100) == Math.trunc(text / 10)% 10 || Math.trunc(text / 100) == text % 10 || Math.trunc(text / 10)% 10== text % 10)
            alert("True")
        else
            alert("False")
    }

    if(selected == 4){
        let text = parseInt(prompt("year:"));
        console.log(text)
        if(text % 400 == 0){
            alert("True")
        }
        else if(text % 4 == 0 && text % 100 != 0){
            alert("True")
        }
        else{
            alert("False")
        }
    }
    if(selected == 5){
        let text = parseInt(prompt("number:"));
        console.log(text)
        let a = Math.trunc(text / 10000)
        let b = Math.trunc(text / 1000) % 10
        let c = Math.trunc(text / 100) % 10
        let d = Math.trunc(text / 10) % 10
        let e = text % 10
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
        console.log(e)
        if (a == e && b == d)
            alert("True")
        else{
            alert("False")
        }
    }
    if(selected == 6){
        let text = parseInt(prompt("USD:"));
        console.log(text)
        let text2 = prompt("What you choose(EUR, UAH, PLN):");
        let kurs = [0.87, 42.1, 3.67]
        if (text2 == "EUR" || text2 == 1)
            alert(`${text * kurs[0]} Eurs`)
        if (text2 == "UAH" || text2 == 2)
            alert(`${text * kurs[1]} Uahs`)
        if (text2 == "PLN" || text2 == 3)
            alert(`${text * kurs[2]} Plns`)
    }
    if(selected == 7){
        let sum = parseInt(prompt("Sum:"));
        console.log(sum)

        if(sum > 200 && sum < 300){
            alert(`${sum - ((sum / 100)* 3)}`)
        }
        else if(sum >= 300 && sum < 500){
            alert(`${sum - ((sum / 100)* 5)}`)
        }
        else if(sum >= 500){
            alert(`${sum - ((sum / 100)* 7)}`)
        }
        else{
            alert(sum)
        }
    }
    if(selected == 8){
        let text = prompt("C, P:");
        console.log(text)
        let array = [];
        for (let i = 0; i < 2; i++){
            array[i] = parseInt(text.split(" ")[i])
        }
        if(array[0] / (Math.PI * 2) < array[1] / 8)
            alert("True")
        else
            alert("False")

    }
    if(selected == 9){
        let score = 0;
        let text = parseInt(prompt("First Question(1. yes, 2. no, 3.maybe):"));
        if (text == 3)
            score += 2;
        let text1 = parseInt(prompt("Seccond Question(1. yes, 2. no, 3.maybe):"))
        if (text1 == 1)
            score += 2;
        let text2 = parseInt(prompt("Third Question(1. yes, 2. no, 3.maybe):"))
        if (text2 == 2)
            score += 2;
        console.log(text)
        alert("Your score: " + score)
    }
    if(selected == 10){
        let text = prompt("Date:");
        console.log(text)
        let array =[];
        for (let i = 0; i < 3; i++){
            array[i] = parseInt(text.split(" ")[i])
        }
        console.log(array)
        let date = new Date(array[0], array[1], array[2] + 1)
        alert(date);

    }
}