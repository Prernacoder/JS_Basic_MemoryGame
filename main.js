const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]


cardArray.sort(() => 0.5 - Math.random()) ///to sort an array randomly 
// console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];

let cardsChosenId = [];

let cardsWon = [];

// console.log(gridDisplay);

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);


    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img');
    const option1Id = cardsChosenId[0];
    const option2Id = cardsChosenId[1];
    console.log(cards);
    console.log("check for match");

    if (option1Id == option2Id) {
        cards[option1Id].setAttribute('src', 'images/blank.png');
        cards[option2Id].setAttribute('src', 'images/blank.png');
        alert("you have clicked the same image ");
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("you found a match");
        cards[option1Id].setAttribute('src', 'images/white.png');
        cards[option2Id].setAttribute('src', 'images/white.png');
        cards[option1Id].removeEventListener('click', flipCard);
        cards[option2Id].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);

    }
    else {
        cards[option1Id].setAttribute('src', 'images/blank.png');
        cards[option2Id].setAttribute('src', 'images/blank.png');
        alert("sorry try again");
    }
    resultDisplay.textContent = "Score : " + cardsWon.length;
    cardsChosen = [];
    cardsChosenId = [];
    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.innerHTML = "Congratulations you found them all";
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id');
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500);
    }



    console.log('clicked', cardId);

}