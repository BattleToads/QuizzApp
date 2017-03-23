namespace QuizApp {
    console.log("Started");

    class Question {
        constructor(
            public question: string,
            public questionNumber: any,
            public answers: string[],
            public correctAnswer: string,
            public points: number
        ) {

        }

        public makeString() {
            let myString = "";
            myString += `${this.questionNumber}: ${this.question}`;
            for (let i = 0; i < this.answers.length; i++) {
                myString += `\n${String.fromCharCode(65 + i)}: ${this.answers[i]}`;
            }
            return myString;
        }

        public evaluate(guess: string) {
            if (guess.toLowerCase() == this.correctAnswer.toLowerCase()) {
                return this.points;
            }
            else {
                return 0;
            }
        }




    }



    class Quiz {
        constructor(
            public quizQuestions: Question[]
        ) {


        }


        public cycleQuestions() {
            for (let i = 0; i < this.quizQuestions.length; i++) {
                let guess = prompt();
            }



        }
    }
    let quizQuestions = [
        new Question("Is Climate Change real?", "1", ["Yes", "No", "What is Climate Change?"], "Yes", 2),
        new Question("What number is bigger?", "2", ["1", "2", "3"], "3", 2)

    ];

    // let quiz = new Quiz(quizQuestions);
    let totalPoints = 0;
    let possiblePoints = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let guess = prompt(quizQuestions[i].makeString());
        totalPoints += quizQuestions[i].evaluate(guess);
        possiblePoints += quizQuestions[i].points;
        
    }
    alert(`You received ${totalPoints} out of a possible ${possiblePoints}`);



}