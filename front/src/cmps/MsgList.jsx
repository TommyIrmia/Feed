import React from 'react'
import MsgPreview from './MsgPreview'

export default function MsgList({ msgs }) {
    return (
        <div className="msg-list">
            {msgs.map(msg => <MsgPreview msg={msg} key={msg._id} />)}
        </div>
    )
}
