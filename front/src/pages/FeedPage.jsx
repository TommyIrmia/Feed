import React, { Component } from 'react'
import { AddComment } from './../cmps/AddComment';

export class FeedPage extends Component {


    onAddComment = (comment) => {
        console.log('comment',comment);
    }

    render() {
        return (
            <main className="feed-page" >
               <AddComment onAddComment={this.onAddComment} /> 
            </main>
        )
    }
}
