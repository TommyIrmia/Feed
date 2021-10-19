import React, { Component } from 'react'
import { AddComment } from './../cmps/AddComment';

export class FeedPage extends Component {
    render() {
        return (
            <main className="feed-page" >
               <AddComment/> 
            </main>
        )
    }
}
