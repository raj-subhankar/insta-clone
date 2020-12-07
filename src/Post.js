import React from 'react'
import './Post.css'
import Avatar from "@material-ui/core/Avatar"

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar 
                    className="post__avatar"
                    alt="RafeQazi"
                    src="/static/images/avatar/1.jpg" />
                <h3>username</h3>
            </div>
            <img className="post__image" src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"/>
            <h4 className="post__text"><strong>username</strong> : caption</h4>
        </div>
    )
}

export default Post