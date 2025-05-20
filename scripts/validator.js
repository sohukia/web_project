// get data from url
const urlParams = new URLSearchParams(window.location.search);

const firstAnswer = urlParams.get('question1');
const secondAnswer = urlParams.getAll('question2');
const thirdAnswer = urlParams.get('question3');
const fourthAnswer = urlParams.get('question4');
const fifthAnswer = urlParams.get('question5');

const comments = urlParams.get('comments');

var score = 0;

// Check if the answer is correct
function checkAnswerOne(answer1) {
    if (answer1 === 'a') {
        score += 4;
        document.getElementById('question1').innerHTML = '<span class="correct">Correct!</span>';
    } else {
        document.getElementById('question1').innerHTML = '<span class="incorrect">Incorrect!</span><br>The correct answer is A) A combination of its hardness and color';
    }
}

function checkAnswerTwo(answer2) {
    let correctAnswers = ['a', 'b', 'c'];
    let correctCount = 0;

    // Count the number of correct answers
    for (const answer of correctAnswers) {
        if (answer2.includes(answer)) {
            correctCount++;
        }
    }

    // Add points to the score
    score += correctCount * 3;

    // Display feedback
    if (correctCount === correctAnswers.length) {
        document.getElementById('question2').innerHTML = '<span class="correct">Correct!</span>';
    } else {
        document.getElementById('question2').innerHTML = '<span class="incorrect">Incorrect!</span> The correct answers is all of them';
    }
}

function checkAnswerThree(answer3) {
    if (answer3 === 'c') {
        score += 4;
        document.getElementById('question3').innerHTML = '<span class="correct">Correct!</span>';
    } else {
        document.getElementById('question3').innerHTML = '<span class="incorrect">Incorrect!</span><br>The correct answer is C) Marble';
    }
}

function checkAnswerFour(answer4) {
    if (answer4 === 'b') {
        score += 4;
        document.getElementById('question4').innerHTML = '<span class="correct">Correct!</span>';
    } else {
        document.getElementById('question4').innerHTML = '<span class="incorrect">Incorrect!</span><br>The correct answer is B) Basalt';
    }
}

function checkAnswerFive(answer5) {
    if (answer5 === 'a') {
        score += 4;
        document.getElementById('question5').innerHTML = '<span class="correct">Correct!</span>';
    } else {
        document.getElementById('question5').innerHTML = '<span class="incorrect">Incorrect!</span><br>The correct answer is A) Gneiss';
    }
}

// Fill the comment field
function fillComment(comments) {
    // Define the list of keywords
    const keywords = ['granite', 'basalt', 'marble', 'gneiss', 'obsidian', 'limestone', 'quartzite', 'sandstone', 'pumice', 'schist'];
    let pointsAwarded = 0;

    // Check if any keyword is present in the comments
    for (const keyword of keywords) {
        if (comments.toLowerCase().includes(keyword)) {
            pointsAwarded = 10;
            break;
        }
    }

    // Add points to the score
    score += pointsAwarded;

    // Display feedback
    if (pointsAwarded > 0) {
        document.getElementById('comments').innerHTML = `<span class="correct">Good example! You earned ${pointsAwarded} points.</span>`;
    } else {
        document.getElementById('comments').innerHTML = '<span class="incorrect">No relevant keywords provided.</span>';
    }
}

// Display the score
function displayScore() {
    document.getElementById('score').innerHTML = `Your score is: ${score}`;
}

// Execute the functions
checkAnswerOne(firstAnswer);
checkAnswerTwo(secondAnswer);
checkAnswerThree(thirdAnswer);
checkAnswerFour(fourthAnswer);
checkAnswerFive(fifthAnswer);
fillComment(comments);
displayScore();