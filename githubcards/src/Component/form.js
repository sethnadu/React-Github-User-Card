import React from "react";


class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'sethnadu'
        }


    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleChangeUser(String(this.state.text))
        console.log(String(this.state.text))
    }


    render(){ 
        return (
            <form onSubmit = {this.handleSubmit}>
                <input type="text" name="text" placeholder="search by login" onChange={this.handleChange}/>
                <button onClick = {this.handleSubmit}>Search</button>
            </form>
        )
    }
}

export default Form;