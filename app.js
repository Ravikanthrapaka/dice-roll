




function roll(){

    // console.log("rolling...")


    let dice=document.getElementById('dice');
    
    let random=Math.floor(Math.random()*6+1)
    let audio=document.getElementById('diceAudio')

    audio.play()//default function, paly is a defualt function when use video or ausio
    dice.classList.add('spin')
    dice.style.backgroundColor='blueviolet'
    dice.style.color='white'
    //classList is help of we can either add a new class or remove a new class
    //for this element on top dice



    //setTimeout(function delay)

    // dice.classList.remove('spin') //its not work beacuse it sinstatntly remove

    //do something adfter specific time use setTimeout


    

    //1000millisecond---1sec //put value in only milliseconds
    //it snow work every time i click its work


    //we want when clicking on this number should be random number get


    

    setTimeout(function(){

        dice.classList.remove('spin')
        //once rotaion complete we wnat
        dice.innerText=random 
        //it refresh it works but we get 0 sometimes 
        //we dont want 0 just add random()*6+1--it adds 1 to value added by 1

        // we want when click the dice sound we want to get audio

    }, 1000)


}