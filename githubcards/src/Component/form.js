import React from "react";


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }


    }

    handleChange = event => {
        this.setState({
           [event.target.name]: event.target.value
        });
        console.log(typeof this.state.text)
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleChangeUser(this.state.text);
        console.log(this.state.text)
    }


    render(){ 
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type="text" name="text" placeholder="enter username/login" onChange={this.handleChange}/>
                <button onClick = {this.handleSubmit}>Search</button>
            </form>
        )
    }
}

export default Form;