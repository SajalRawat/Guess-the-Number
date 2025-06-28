

let theINT = (1+Math.floor(Math.random()*99))

console.log(theINT);




let score = 100
Response = {
    less:"Less than Original",
    more:"More than Original"
}

function updater(response){

    document.querySelector(".main").innerHTML =  response
    score  = score-1
 document.querySelector("#entry").value = ''
 document.body.querySelector(".scoreDisplay").innerHTML = `Current Score: ${score}`




}

function win(){
    document.body.querySelector('.entry').remove()
    document.body.querySelector('.about').remove()
    document.body.querySelector('.main').innerHTML = "Your Guess was correct!!"

    document.body.style.backgroundColor = "Green"
    document.body.style.color = "white"
    let scoreBoard = document.createElement("div")
    scoreBoard.setAttribute("class","score")
    scoreBoard.innerHTML = `Your Score: ${score}`
    document.body.append(scoreBoard)

}






function check(){
    input = document.querySelector("#entry").value
    if (input != ""){
    if (input<theINT){
               updater(Response.less)
    }
    if (input>theINT){
        updater(Response.more)
        
    }
    if (input==theINT){
        win()   
    }}
}

document.querySelector("#entry").addEventListener('keydown',(event) => {
console.log(event.key);
if (event.key == 'Enter'){
    console.log('Working');
    check()

}

}

)

document.body.querySelector(".scoreDisplay").innerHTML = `Current Score: ${score}`
