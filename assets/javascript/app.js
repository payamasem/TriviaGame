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
	setTimeout(decrement, 5500); 
}

function correct() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".questionArea").html(gameHTML);
	setTimeout(decrement, 5500); 
}

function incorrect() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Oops, sorry but that's wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + wrongimageArray[questionCounter];
	$(".questionArea").html(gameHTML);
	setTimeout(decrement, 5500);
}

function next() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".questionArea").html(gameHTML);
}

function decrement() {
	if (questionCounter < 9) {
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
var questionArray = ["1. Who was the first twitter user to reach 20 million followers?", "2. Which of the following is the longest running American animated TV show?", "3. Every year, over 9,000 people injure themselves with what (apparently) harmless object?", "4. When was the social media website Myspace created?", "5. What is the largest freshwater lake in the world?", "6. Fill in the blank: Donald Trump is the ___ president of the United States.", "7. Fill in the blank: UC Berkeley, the flagship campus of the University of California system, was founded in the year _____.", "8. When was the social media site Facebook founded?", "9. When was the social media site Twitter founded?", "10. When was Instagram's first launch?"];
var answerArray = [["Kim Kardashian", "Justin Bieber", "Lady Gaga", "Ellen Degeneres"], ["Spongebob","The Simpsons","Rugrats","Family Guy"], ["Toothpick", "Pencil", "Paperclip", "Butter Knife"], ["2001", "2006", "2003", "2000"], ["Lake Erie", "Lake Victoria", "Caspian Sea", "Lake Michigan"], ["43rd", "41st", "45th", "47th"], ["1901", "1872", "1891", "1868"], ["2001", "2005", "2002", "2004"], ["2005", "2007", "2004", "2006"], ["2008", "2010", "2007", "2009"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/gaga.gif'>", "<img class='center-block img-right' src='assets/images/simpsons.gif'>", "<img class='center-block img-right' src='assets/images/toothpick.gif'>", "<img class='center-block img-right' src='assets/images/myspace.gif'>", "<img class='center-block img-right' src='assets/images/lake.gif'>", "<img class='center-block img-right' src='assets/images/trump.gif'>", "<img class='center-block img-right' src='assets/images/berkeley.gif'>", "<img class='center-block img-right' src='assets/images/facebook.gif'>", "<img class='center-block img-right' src='assets/images/twitter.gif'>", "<img class='center-block img-right' src='assets/images/instagram.gif'>"];
var wrongimageArray = ["<img class='center-block img-right' src='assets/images/wrong.gif'>", "<img class='center-block img-right' src='assets/images/wrong1.gif'>", "<img class='center-block img-right' src='assets/images/wrong0.gif'>", "<img class='center-block img-right' src='assets/images/wrong2.gif'>", "<img class='center-block img-right' src='assets/images/wrong3.gif'>", "<img class='center-block img-right' src='assets/images/wrong4.gif'>", "<img class='center-block img-right' src='assets/images/wrong5.gif'>", "<img class='center-block img-right' src='assets/images/wrong6.gif'>", "<img class='center-block img-right' src='assets/images/wrong8.gif'>"]
var correctAnswers = ["C. Lady Gaga", "B. The Simpsons", "A. Toothpick", "C. 2003", "A. Lake Erie", "C. 45th", "D. 1868", "D. 2004", "D. 2006", "B. 2010"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;