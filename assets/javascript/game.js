var wins=0;
var losses=0;
var guesses_left=9;
var guesses_so_far=[];
var computerChoices=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

document.onkeyup=function(event)
{
	var userGuess=event.key;
	var computerGuess=computerChoices[Math.floor(Math.random()*computerChoices.length)];
	var html;

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
	html="<p> Wins: "+wins+"</p><br>"+"<p> Losses: "+losses+"</p><br>"+
	"<p>Guesses Left: "+guesses_left+"</p><br>"+"<p>Your guesses so far: "+
	guesses_so_far.join(',')+"</p><br>";

	document.querySelector("#game").innerHTML=html;
	
}

function myguesses(guesses_thus_far,userguess)
{
	guesses_thus_far.push(userguess);
	return guesses_thus_far;
}