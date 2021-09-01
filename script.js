const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime, endTime;

const setOfWords = [
                    "My name is Annu Kamat and I an final year graduate at GTBIT",
                    "That college suck man!",
                    "And people there too, but some people are really good"
                   ]; 

const playGame = () => {
    let randomNumber = Math.floor(Math.random() * setOfWords.length);
    msg.innerText = setOfWords[randomNumber];

    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime) * 60);

    let finalmsg = `Your speed is ${speed} WPM(Words per minute)! `;
    finalmsg += compareWords(msg.innerText, totalStr); //actualmsg, msgYouTyped

    msg.innerText = finalmsg;

    // console.log(wordCount);
    // console.log(totalTime);
}

const compareWords = (str1, str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;

    word1.forEach(function(item, idx){
        if(item == word2[idx]) count++;
    })

    let noOfError = word1.length - count;

    return (`${count} words correct out of ${word1.length} words and total no. of error are ${noOfError}.`)
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    return response;
}

// 1. textArea enable if disabled vice versa on clicking button
btn.addEventListener('click', function(){
    // console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})
