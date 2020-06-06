import React from "react";
import Comment from "./comment";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      isLoading: false,
      size: 4,
      page: 1
    };
  }

  async getComments() {
    this.setStatus(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      const comments = data.map((item, index) => (
        <Comment
          key={index}
          name={item.name}
          email={item.email}
          body={item.body}
        />
      ));
      this.setState({ comments });
    } catch (e) {
      alert("Failed");
    }
    this.setStatus(false);
  }

  setStatus(isLoading) {
    this.setState({ isLoading });
  }

  componentDidMount() {
    this.getComments();
  }

  nextComments() {
    this.increasePage();
  }

  increasePage() {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  }

  displayable() {
    return this.state.comments
      ? this.state.comments.slice(
          this.state.page * this.state.size,
          (this.state.page + 1) * this.state.size
        )
      : [];
  }

  render() {
    // console.log(this.state.comments[0]);

    return (
      <div>
        {this.state.isLoading ? <h4> Loading... </h4> : ""}
        <h4>size: {this.state.comments?.length | 0}</h4>

        {this.displayable()}

        <button className="next-button" onClick={this.nextComments.bind(this)}>
          Next
        </button>
      </div>
    );
  }
}

export default CommentList;
