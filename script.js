

let theINT = (1+Math.floor(Math.random()*99))

console.log(`Ooh so you are a developer and came here for Answer \n Well Here is a reward for a developer froma developer \n
    The Answer is ${theINT}`);




let score = 100
Response = {
    less:"Less than the Answer",
    more:"More than the Answer"
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
 function warn(){
    document.querySelector(".aboutMain").innerHTML = "Error:Enter a Valid Number between 1 and 100"
    document.querySelector(".aboutMain").classList.add("warn")
     document.querySelector("#entry").value = ''
     score = score-1
      document.body.querySelector(".scoreDisplay").innerHTML = `Current Score: ${score}`


 }





function check(){
    input = document.querySelector("#entry").value
    if (input != "" && input>0 && input<=100){
        document.querySelector(".aboutMain").innerHTML = "Number between 1 and 100"
            document.querySelector(".aboutMain").classList.remove("warn")
    if (input<theINT){
               updater(Response.less)
    }
    if (input>theINT){
        updater(Response.more)
        
    }
    if (input==theINT){
        win()   
    }}

    else{
        warn()
    }

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
