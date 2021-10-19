import React, { Component } from 'react'
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

    onAddMsg = (comment) => {
        console.log('comment', comment);
    }

    render() {
        const {msgs} = this.state
        console.log('msgs from render', msgs)
        return (
            <main className="feed-page" >
                <AddMsg onAddMsg={this.onAddMsg} />
            </main>
        )
    }
}
