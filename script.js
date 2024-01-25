*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.main{
    background-color: #E1F0DA;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.result {
    height: 18vh;
    width: 50%;
    text-align: center;
}

.result h1{
    margin-top: 5%;
    font-size:2.8em;
    color: #8c8f65;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    cursor: pointer;
    user-select: none;
}
.winner{
    height: 10vh;
    width: 50vw;
    text-align: center;
}
.player{
    background-color: #E1F0DA;
    height: 10vh;
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 15vh;
}
.player1{
    height: 10vh;
    width: 40%;
    display: flex;
    justify-content: end;
    align-items: center;
    cursor: default;
}
p{
    font-size: 3em;
    color:#52533c;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.player2{
    height: 10vh;
    width: 40%;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: default;
}
.dice{
    background-color: #E1F0DA;
    height: 40vh;
    width:30%;
    display: flex;
    margin-top: 5vh;
    justify-content: space-between;
    align-items: center;
}
.dice1{
    background-color: #35800a;
    height: 19.8vh;
    width:40%;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 5px;
    cursor: pointer;
}
.dice2{
    background-color: #1f4907;
    height: 19.8vh;
    width:40%;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0px 0px 5px;
    cursor: pointer;
}
.dice1 div{
    height: 50%;
    width:33.33%;
    background-color: #99BC85;
    border: 1px solid rgb(115, 138, 114);
    display: flex;
    justify-content: center;
    align-items: center;
}
.dice2 div{
    height: 50%;
    width:33.33%;
    background-color: #99BC85;
    border: 1px solid rgb(115, 138, 114);
    display: flex;
    justify-content: center;
    align-items: center;
}
.dice1 div div{
    background-color: white;
    border-radius: 50%;
    height: 3vh;
}
.dice2 div div{
    background-color: white;
    border-radius: 50%;
    height: 3vh;
}
@media (max-width: 1000px) {
    .dice {
        width: 50%;
    }
    .result{
        width: 100%;
    }
    .player {
        width: 100%;
    }
    .main p{
        width: 100%;
    }
    .winner {
        font-size: 2em;
    }
}
@media (max-width:600px) {
    .result {
        width: 100%;
    }
    .result h1 {
        font-size: 2em;
    }
    .player{
        width: 100%;
    }
    .player p {
        font-size: 2em;
    }
    .dice {
        width: 100%;
    }
}
