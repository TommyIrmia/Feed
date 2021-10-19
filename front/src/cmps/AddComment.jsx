import React, { Component } from 'react'

export class AddComment extends Component {

    state = {
        comment: {
            email: '',
            msg: ''
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState((prevState) => ({ ...prevState, comment: { ...prevState.comment, [field]: value } }))
    }

    render() {
        const { comment } = this.state;
        const { email, msg } = this.state.comment;
        return (
            <form className="add-comment" onSubmit={(ev)=>ev.preventDefault()} >

                <input type="text" name="email" value={email} placeholder="Emial"
                onChange={this.handleChange} autoFocus={true} />

                <input type="text" name="msg" value={msg} placeholder="Massage"
                onChange={this.handleChange}/>
            </form>
        )
    }
}
