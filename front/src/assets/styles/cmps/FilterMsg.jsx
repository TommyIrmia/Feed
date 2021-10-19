import React, { Component } from 'react'

export class FilterMsg extends Component {

    state = {
        txt:''
    }

    handleChange = (ev) => {
        const { value } = ev.target;
        this.setState({ txt: value }, this.props.onSetFilter(value))
    }

    render() {
        const {txt} = this.props
        return (
            <section className="filter-msg" >
                <input 
                type="text" 
                name="txt" 
                value={txt}
                onChange={this.handleChange}
                placeholder="🔎 Filter"
                autoComplete="off" 
                />
            </section>
        )
    }
}
