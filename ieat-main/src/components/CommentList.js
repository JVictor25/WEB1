import React from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments, editComment, deleteComment }) => {
  console.log({ comments });
  return (
    <ul className="list-group">
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          editComment={editComment}
          deleteComment={deleteComment}
        />
      ))}
    </ul>
  );
};

export default CommentList;
