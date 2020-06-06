import React from "react";
import styled from "styled-components";

import CommentList from "./comment-list";

/**
 * 1) fetch comments data from
 * https://jsonplaceholder.typicode.com/comments
 * 2) render the data as:
 * name  : <comment-owner-name>
 * email : <comment-owner-email>
 * body  : <comment-owner-body>
 * you can skip the : but make sure that the values are aligned
 * 3) the list is going to pull 500 entries and might take a bit time. Let's
 * render 4 states on the screen
 *    a. empty state (shows not comments in the list)
 *    b. loading state (shows a loader while the api call is done)
 *    c. final state wich is mentiond in (2)
 *    d. (optional) error state (server error response)
 */

const App = () => {
  return (
    <Container>
      <CommentList className="comment-container" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`;

export default App;
