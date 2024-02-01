function rollDice() {
    let dice1Divs = document.querySelectorAll(".dice1 div div");
    let dice2Divs = document.querySelectorAll(".dice2 div div");
    let winnerElement = document.querySelector(".winner");


    let countDice1 = rollSingleDice(dice1Divs);


    let countDice2 = rollSingleDice(dice2Divs);


    if (countDice1 === 6 && countDice2 === 6) {
        winnerElement.textContent = "It's a tie!";
    } else if (countDice1 === 6) {
        winnerElement.textContent = "Player 1 is the winner!";
    } else if (countDice2 === 6) {
        winnerElement.textContent = "Player 2 is the winner!";    
    }
    else {
        winnerElement.textContent = "No winner yet!";
    }
}
function rollSingleDice(div) {
    let totalDiv = div.length; 

  
    div.forEach(innerDiv => {
        innerDiv.style.display = "none";
    });

    
    let rolledDivs = [];

    
    let randomCount = Math.floor(Math.random() * totalDiv) + 1;

    
    for (let i = 0; i < randomCount; i++) {

        let randomIndex;

      
        do {
            randomIndex = Math.floor(Math.random() * totalDiv);
        } while (rolledDivs.includes(randomIndex));

   
        let randomInnerDiv = div[randomIndex];

   
        rolledDivs.push(randomIndex);

        randomInnerDiv.style.display = "";
    }

   
    return randomCount;
}
