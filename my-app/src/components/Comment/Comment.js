import React from "react";
import "./Comment.scss";

const Comment = (comment) => {
  return (
    <div id={comment.comment.id} className="comment">
      <h1>{comment.comment.name}</h1>
      <h2>{comment.comment.comment}</h2>
    </div>
  );
};

export default Comment;
