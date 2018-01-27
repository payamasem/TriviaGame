$(document).ready(function() {


function start() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".questionArea").html(startScreen);
}

start();


$("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	next();

	timerSetup();

});

$("body").on("click", ".answer", function(event){
	//answeredQuestion = true;
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
	

		clearInterval(theClock);
		correct();
	}
	else {
		clearInterval(theClock);
		incorrect();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

function incorrect() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".questionArea").html(gameHTML);
	setTimeout(decrement, 5000); 
}

function correct() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".questionArea").html(gameHTML);
	setTimeout(decrement, 5000); 
}

function incorrect() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! You suck! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.gif'>";
	$(".questionArea").html(gameHTML);
	setTimeout(decrement, 5000);
}

function next() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".questionArea").html(gameHTML);
}

function decrement() {
	if (questionCounter < 2) {
	questionCounter++;
	next();
	counter = 30;
	timerSetup();
	}
	else {
		endGame();
	}
}

function timerSetup() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			incorrectDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function endGame() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".questionArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	next();
	timerSetup();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["Who was the first twitter user to reach 20 million followers?", "Which of the following is the longest running American animated TV show?", "Every year, over 9,000 people injure themselves with what (apparently) harmless object?"];
var answerArray = [["Kim Kardashian", "Justin Bieber", "Lady Gaga", "Ellen Degeneres"], ["Spongebob","The Simpsons","Rugrats","Family Guy"], ["Toothpick", "Pencil", "Paperclip", "Butter Knife"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/gaga.gif'>", "<img class='center-block img-right' src='assets/images/simpsons.gif'>", "<img class='center-block img-right' src='assets/images/toothpick.gif'>"];
var correctAnswers = ["C. Lady Gaga", "B. The Simpsons", "A. Toothpick"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;