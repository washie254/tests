import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Comment, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CommentItem from './CommentItem';

function App() {
  return (
      <Comment.Group>
        <Header as='h3' dividing>
          SIT313 Comments
        </Header>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />

      </Comment.Group>
  );
}

export default App;
