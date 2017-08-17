var wins=0;
var losses=0;
var guesses_left=9;
var guesses_so_far=[];
var computerChoices=['a','b','c','d','e','1','2','3','4','5'];

document.onkeyup=function(event)
{
	var userGuess=event.key;
	var computerGuess=computerChoices[Math.floor(Math.random()*computerChoices.length)];
	var html;
	/*if((userGuess=='q')||(userGuess=='w')||(userGuess=='e')||(userGuess=='r')||(userGuess=='t')||(userGuess=='y')
		||(userGuess=='u')||(userGuess=='i')||(userGuess=='o')||(userGuess=='p')||(userGuess=='a')||(userGuess=='s')
		||(userGuess=='d')||(userGuess=='f')||(userGuess=='g')||(userGuess=='h')||(userGuess=='j')||(userGuess=='k')
		||(userGuess=='l')||(userGuess=='z')||(userGuess=='x')||(userGuess=='c')||(userGuess=='v')||(userGuess=='b')
		||(userGuess=='n')||(userGuess=='m'))*/
	//{
		if(userGuess==computerGuess)
		{
			wins++;
			guesses_left=9;
		}
		else
		{
			guesses_left--;
		}

		if(guesses_left==0)
		{
			losses++;
			guesses_left=9;
		}
		myguesses(guesses_so_far,userGuess);
		html="<p> <b>Wins:</b> "+wins+"</p>"+"<p> <b>Losses:</b> "+losses+"</p>"+
		"<p><b>Guesses Left:</b> "+guesses_left+"</p>"+"<p><b>Your guesses so far:</b> "+
		guesses_so_far.join(',')+"</p>";

		document.querySelector("#game").innerHTML=html;
	//}
	
}

function myguesses(guesses_thus_far,userguess)
{
	guesses_thus_far.push(userguess);
	return guesses_thus_far;
}