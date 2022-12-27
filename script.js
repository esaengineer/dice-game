'use script';
const score0Ele=document.querySelector('#score--0');
const score1Ele=document.querySelector('#score--1');
const player0Ele=document.querySelector('.player--0');
const player1Ele=document.querySelector('.player--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');


// console.log(score0Ele+'   '+current0El);
// console.log(player0Ele+ '   '+ player1Ele);

const diceEle=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
// score0Ele.textContent=0;
// score1Ele.textContent=0;

let scores,currentScore,activePlayer,playing;

const resetingGame= function()
{

scores=[0,0];
currentScore=0;
activePlayer=0;
playing=true;
diceEle.classList.add('hidden');

score0Ele.textContent=0;
score1Ele.textContent=0;
current0El.textContent=0;
current0El.textContent=0;
player0Ele.classList.remove('player--winner');
player1Ele.classList.remove('player--winner');
player0Ele.classList.add('player--active');
player1Ele.classList.remove('player--active');
};

resetingGame();


const switchPlayer = function()
{
	document.getElementById(`current--${activePlayer}`).textContent=0;
	currentScore=0;
	activePlayer = activePlayer === 0 ? 1 : 0;
	// console.log(activePlayer);
	player0Ele.classList.toggle('player--active');
	player1Ele.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){

	if(playing)
	{
 
const dice=Math.trunc(Math.random()*6)+1;
// console.log(dice);
diceEle.classList.remove('hidden');
diceEle.src=`dice-${dice}.png`;
// console.log(diceEle);


if(dice!==1)
{
currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;
}

else 
{
	switchPlayer();

}


}


});

btnHold.addEventListener('click',function(){

if(playing)
{
scores[activePlayer] +=currentScore;
console.log(scores[activePlayer]);
document.getElementById(`score--${activePlayer}`).textContent =
scores[activePlayer];




if(scores[activePlayer] >=100)
{
	playing=false;
    diceEle.classList.add('hidden');
	document.querySelector(`.player--${activePlayer}`).
	classList.add('player--winner');

	document.querySelector(`.player--${activePlayer}`).
	classList.remove('player--active');
}

else 
{
	switchPlayer();
}

}

});



btnNew.addEventListener('click',function(){
 resetingGame();

});