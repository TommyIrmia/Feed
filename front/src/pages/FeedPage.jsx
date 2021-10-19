import React, { Component } from 'react'
import {MsgList} from '../cmps/MsgList';
import { feedService } from '../services/feed.service';
import { AddMsg } from './../cmps/AddMsg';
import { FilterMsg } from './../assets/styles/cmps/FilterMsg';

export class FeedPage extends Component {

    state = {
        msgs: [],
    }

    componentDidMount() {
        this.loadMsgs()
    }

    loadMsgs = async () => {
        try {
            const msgs = await feedService.query()
            this.setState({ msgs })
        } catch (err) {
            console.error('Couldnt get msgs', err)
        }
    }

    onAddMsg = async (msg) => {
        try {
            const addedMsg = await feedService.addMsg(msg)
            this.setState({ msgs: [addedMsg, ...this.state.msgs] })
        } catch (err) {
            console.error('Couldnt add msg', err)
        }
    }

    onSetFilter = async (filterBy) => {
        try {
            const msgs = await feedService.query(filterBy);
            this.setState({ msgs });
        } catch (err) {
            console.error('Couldnt filter msgs', err)
        }
    }

    render() {
        const { msgs } = this.state
        return (
            <main className="feed-page" >
                <AddMsg onAddMsg={this.onAddMsg} />
                <FilterMsg onSetFilter={this.onSetFilter} />
                <MsgList msgs={msgs} />
            </main>
        )
    }
}
