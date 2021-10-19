import React, { Component } from 'react'
import MsgList from '../cmps/MsgList';
import { feedService } from '../services/feed.service';
import { AddMsg } from './../cmps/AddMsg';

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

    render() {
        const { msgs } = this.state
        console.log('msgs from render', msgs)
        return (
            <main className="feed-page" >
                <AddMsg onAddMsg={this.onAddMsg} />

                <MsgList msgs={msgs} />
            </main>
        )
    }
}
