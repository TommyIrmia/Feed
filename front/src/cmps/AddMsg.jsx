import React, { Component } from 'react'

export class AddMsg extends Component {

    state = {
        msg: {
            email: '',
            txt: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState((prevState) => ({ ...prevState, msg: { ...prevState.msg, [field]: value } }))
    }

    render() {
        const { msg } = this.state;
        const { email, txt } = this.state.msg;
        const { onAddMsg } = this.props;
        return (
            <form className="add-comment" onSubmit={(ev) => {
                ev.preventDefault()
                onAddMsg(msg)
            }}>

                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    autoFocus={true}
                    onChange={this.handleChange} />

                <textarea
                    name=""
                    cols="30" rows="5"
                    type="text"
                    name="msg" value={txt}
                    placeholder="Massage"
                    onChange={this.handleChange}>
                </textarea>

                <div className="btn-container">
                    <button>SUBMIT</button>
                </div>
            </form>
        )
    }
}
