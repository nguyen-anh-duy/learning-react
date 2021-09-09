import React, { Component } from 'react'

export default class Result extends Component {
        state= {
            DapAn: false,
        }
    render() {
        const { questions, onDapAn } = this.props;
        return (
            <div>
                <h2><button onClick={() =>onDapAn()} >Đáp án</button></h2>
                {
                    questions.map((quest)=>{
                        const { question, correct } = quest;
                        return <div>
                            <p> {question} {correct} </p>
                        </div>
                    })
                }
            </div>
        )
    }
}
