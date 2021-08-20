import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value });
        console.log(this.state.name);
    };

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" onChange={this.handleChange} />
                    </div>
                    <label htmlFor="">Country</label>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Form;
