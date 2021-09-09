import React, { Component } from 'react'
import "./Question.css";

export default class Question extends Component {
    
    render() {
        const { questions, onCheck } = this.props;
        return (
            <div>
                {
                    questions.map((quest)=>{
                        const { question, a, b, c, d } = quest;
                        return <div>
                            <h2>{question}</h2>
                            <p><input type="checkbox" onClick={() =>onCheck(quest)} ></input>{a}</p>
                            <p><input type="checkbox" onClick={() =>onCheck(quest)} ></input>{b}</p>
                            <p><input type="checkbox" onClick={() =>onCheck(quest)} ></input>{c}</p>
                            <p><input type="checkbox" onClick={() =>onCheck(quest)} ></input>{d}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
