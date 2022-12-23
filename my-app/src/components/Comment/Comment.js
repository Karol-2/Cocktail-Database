import React from "react";
import './Comment.scss'

const Comment = (comment) => {
    console.log(comment.comment.id)
    return (
        <div id={comment.comment.id} className="comment">
        <h1>{comment.comment.name}</h1>
        <h3>{comment.comment.content}</h3>
        </div>
    )

}

export default Comment;