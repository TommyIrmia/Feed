import React from 'react'

export default function MsgPreview({ msg }) {
    console.log(msg)
    return (
        <div className="msg-preview">
            <div className="img-container">
                <img alt="user-img" src={msg.imgUrl} />
            </div>
            <div className="msg-info">
                <p className="email">{msg.email}</p>
                <p className="text">{msg.msg}</p>
            </div>
        </div>
    )
}
