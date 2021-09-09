import React, { Component } from 'react'

export default class DemoForm extends Component {
    state = {
        userName : "",
        passWord : ""
    }
    // e là event là sự kiện
    // hàm onChangeHandle là xài chung cho tất cả change sẽ tự tìm value dựa vào tên tương ứng
    // name là name đặt ở dưới input giống với property key trên state  
    onChangeHandle = (e) =>{
        const { name, value } = e.target;
        this.setState ({
            [name]: value,
        });
    }
    onUserNameChange = (e) =>{
        const { name, value } = e.target;
        this.setState ({
            userName: value,
        });
    }
    onPassWordChange = (e) =>{
        const { name, value } = e.target;
        this.setState ({
            passWord: value,
        });
    }
    onSubmitHandle = (e) => {
        e.preventDefault();
        console.log("submit");
    }
    render() {
        return (
            <div>
                <h1>Demo Form</h1>
                <form onSubmit={this.onSubmitHandle} >
                    <div>
                        <label htmlFor="userName">userName </label>
                        <input type="text" name="userName" 
                            onChange={this.onChangeHandle} value={this.state.userName} />
                    </div>
                    <div>
                        <label htmlFor="passWord">passWord </label>
                        <input type="text" name="passWord" 
                            onChange={this.onChangeHandle} value={this.state.passWord} />
                    </div>
                    <button type="submit">Log in</button>
                </form>
                <p>userName: {this.state.userName} </p>
                <p>passWord: {this.state.passWord} </p>
            </div>
        )
    }
}
