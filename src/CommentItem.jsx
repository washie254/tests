import React from 'react';
import { Comment, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function CommentItem(props){
    return (
        <Comment>
          <Comment.Avatar src= {props.img} />
          <Comment.Content>
    <Comment.Author as='a'>{props.name}</Comment.Author>
            <Comment.Metadata>
              <div>{props.date}</div>
            </Comment.Metadata>
            <Comment.Text>{props.detail}</Comment.Text>
            <Comment.Actions>
              <Comment.Action>{props.action}</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
    )
}

export default CommentItem;