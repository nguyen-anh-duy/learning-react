import React, { Component } from 'react'
import Question from './Question';
import Result from './Result';

export default class QuizApp extends Component {
    state = {
        questions: [
            {
                question: "Which language runs in a web browser?",
                a: "Java",
                b: "C",
                c: "Python",
                d: "JavaScript",
                correct: "d",
            },
            {
                question: "What does CSS stand for?",
                a: "Central Style Sheets",
                b: "Cascading Style Sheets",
                c: "Cascading Simple Sheets",
                d: "Cars SUVs Sailboats",
                correct: "b",
            },
            {
                question: "What does HTML stand for?",
                a: "Hypertext Markup Language",
                b: "Hypertext Markdown Language",
                c: "Hyperloop Machine Language",
                d: "Helicopters Terminals Motorboats Lamborginis",
                correct: "a",
            },
            {
                question: "What year was JavaScript launched?",
                a: "1996",
                b: "1995",
                c: "1994",
                d: "none of the above",
                correct: "b",
                },
        ]
    }
    onCheck = (check) => {
        const questions = this.state.questions;
        const { question, a, b, c, d } = questions;
        const idx = questions.findIndex((quest) => quest.question===question);
        console.log(idx);
    }
    onDapAn = () => {

    }
    render() {
        const { questions } = this.state;
        return (
            <div>
                <Question questions={questions}
                    onCheck = {this.onCheck}
                />
                <Result questions={questions}
                    onDapAn = {this.onDapAn}
                />
            </div>
        )
    }
}
