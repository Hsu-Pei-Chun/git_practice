function randomNumber(){
    let number = Math.floor(Math.random()*6);
    return number;
}

const color = ['gold','silver','cyan','magenta','teal','coffee'];
const animal = ['capybara','french bulldog','bird','cat','goat','cow'];
const career = ['warrior','ranger','mage','spy','ninja','druid']

function generateWord(){
    let word = {};
    word.color = color[randomNumber()];
    word.animal = animal[randomNumber()];
    word.career = career[randomNumber()];
    return word;
}

let form = document.getElementById('myForm');

function dataFetch(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    let name = formData.get('name');
    let nickName = formData.get('nickName');
    let born = formData.get('born');
    let luckyword = generateWord();

    let message1 = `你好 ${name}，你的綽號是 ${nickName}，出生於 ${born}。`;

    let message2 = `你的幸運顏色是： ${luckyword.color}，幸運動物是： ${luckyword.animal}，異世界職業是： ${luckyword.career}。`

    document.getElementById("message1").innerHTML = message1;
    document.getElementById('message2').innerHTML = message2
}

form.addEventListener('submit', dataFetch);