import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Comment, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CommentItem from './CommentItem';
import authors from './authors';

function App() {
  return (
      <Comment.Group>
        <Header as='h3' dividing>
          SIT313 Comments
        </Header>

        <CommentItem 
         name={authors[0].name}
         img = {authors[0].img}
         detail = {authors[0].detail}
         date = {authors[0].date}
         action = {authors[0].action}
        />

<CommentItem 
         name={authors[1].name}
         img = {authors[1].img}
         detail = {authors[1].detail}
         date = {authors[1].date}
         action = {authors[1].action}
        />
        

      </Comment.Group>
  );
}

export default App;
