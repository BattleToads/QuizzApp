var QuizApp;
(function (QuizApp) {
    console.log("Started");
    var Question = (function () {
        function Question(question, questionNumber, answers, correctAnswer, points) {
            this.question = question;
            this.questionNumber = questionNumber;
            this.answers = answers;
            this.correctAnswer = correctAnswer;
            this.points = points;
        }
        Question.prototype.makeString = function () {
            var myString = "";
            myString += this.questionNumber + ": " + this.question;
            for (var i = 0; i < this.answers.length; i++) {
                myString += "\n" + String.fromCharCode(65 + i) + ": " + this.answers[i];
            }
            return myString;
        };
        Question.prototype.evaluate = function (guess) {
            if (guess.toLowerCase() == this.correctAnswer.toLowerCase()) {
                return this.points;
            }
            else {
                return 0;
            }
        };
        return Question;
    }());
    var Quiz = (function () {
        function Quiz(quizQuestions) {
            this.quizQuestions = quizQuestions;
        }
        Quiz.prototype.cycleQuestions = function () {
            for (var i = 0; i < this.quizQuestions.length; i++) {
                var guess = prompt();
            }
        };
        return Quiz;
    }());
    var quizQuestions = [
        new Question("Is Climate Change real?", "1", ["Yes", "No", "What is Climate Change?"], "Yes", 2),
        new Question("What number is bigger?", "2", ["1", "2", "3"], "3", 2)
    ];
    // let quiz = new Quiz(quizQuestions);
    var totalPoints = 0;
    var possiblePoints = 0;
    for (var i = 0; i < quizQuestions.length; i++) {
        var guess = prompt(quizQuestions[i].makeString());
        totalPoints += quizQuestions[i].evaluate(guess);
        possiblePoints += quizQuestions[i].points;
    }
    alert("You received " + totalPoints + " out of a possible " + possiblePoints);
})(QuizApp || (QuizApp = {}));
//# sourceMappingURL=app.js.map