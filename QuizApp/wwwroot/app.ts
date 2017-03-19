

namespace QuizApp {
    console.log("Started");
    class Question {
        constructor(
            public question: string,
            public questionNumber: string,
            public answers: string[],
            public correctAnswer: string,
            public points: string,
        ) {
            
        }

        public prepHTML() {
            let preppedHTML = "";
            preppedHTML += `<h1>Q${this.questionNumber}: ${this.question}</h1><hr>`;
            for (let i = 0; i < this.answers.length; i++) {
                preppedHTML += `<p><input type='radio' name='${this.questionNumber}' label='${this.answers[i]}'`;
                console.log(preppedHTML);
            }
            return preppedHTML;
        }


    }

    let questions = [
        new Question("Is Climate Change real?", "1", ["Yes", "No", "What is Climate Change?"], "Yes", "2")

    ];

    document.getElementById("questions").innerHTML = questions[0].prepHTML();
    

    
}