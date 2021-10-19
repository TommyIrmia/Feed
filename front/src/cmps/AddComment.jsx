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
        const { onAddComment } = this.props;
        return (
            <form className="add-comment" onSubmit={(ev) => {
                ev.preventDefault()
                onAddComment(comment)
            }}>

                <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Emial"
                    autoFocus={true}
                    onChange={this.handleChange} />

                <textarea
                    name=""
                    cols="30" rows="5"
                    type="text"
                    name="msg" value={msg}
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
