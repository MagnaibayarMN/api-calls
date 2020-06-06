import React from "react";
import styled from "styled-components";

const CommentItem = styled.div`
  width: 500px;
  height: 100%;
  padding: 16px;
`;

class Comment extends React.Component {
  render() {
    return (
      <CommentItem className="comment">
        <div className="col">
          <p>Name</p>
          <p>Email</p>
          <p>Body</p>
        </div>
        <div className="col">
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.body}</p>
        </div>
      </CommentItem>
    );
  }
}

export default Comment;
