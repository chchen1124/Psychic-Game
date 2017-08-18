var wins=0;
var losses=0;
var guesses_left=9;
var guesses_so_far=[];
var computerChoices=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var computerGuess=computerChoices[Math.floor(Math.random()*computerChoices.length)];

document.onkeyup=function(event)
{
	var userGuess=event.key;
	var html;
	if(userGuess===computerGuess)
	{
		wins++;
		guesses_left=9;
		computerGuess=computerChoices[Math.floor(Math.random()*computerChoices.length)];

	}
	else
	{
		guesses_left--;
		myguesses(guesses_so_far,userGuess);
	}

	if(guesses_left==0)
	{
		losses++;
		guesses_left=9;
		guesses_so_far=[];
		computerGuess=computerChoices[Math.floor(Math.random()*computerChoices.length)];
	}
	
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