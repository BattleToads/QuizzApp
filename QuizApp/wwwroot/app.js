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
        Question.prototype.prepHTML = function () {
            var preppedHTML = "";
            preppedHTML += "<h1>Q" + this.questionNumber + ": " + this.question + "</h1><hr>";
            for (var i = 0; i < this.answers.length; i++) {
                preppedHTML += "<p><input type='radio' name='" + this.questionNumber + "' label='" + this.answers[i] + "'";
                console.log(preppedHTML);
            }
            return preppedHTML;
        };
        return Question;
    }());
    var questions = [
        new Question("Is Climate Change real?", "1", ["Yes", "No", "What is Climate Change?"], "Yes", "2")
    ];
    document.getElementById("questions").innerHTML = questions[0].prepHTML();
})(QuizApp || (QuizApp = {}));
//# sourceMappingURL=app.js.map