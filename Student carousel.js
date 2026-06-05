const cards = document.querySelectorAll(".student-card");

let currentCard = 0;

function showCard(index){

    for(let i = 0; i < cards.length; i++){
        cards[i].classList.remove("active");
    }

    cards[index].classList.add("active");
}

function nextCard(){

    if(currentCard < cards.length - 1){
        currentCard++;
    }else{
        currentCard = 0;
    }

    showCard(currentCard);
}

function previousCard(){

    if(currentCard > 0){
        currentCard--;
    }else{
        currentCard = cards.length - 1;
    }

    showCard(currentCard);
}