import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  // Importing CommentDetail.js by pulling it in as a jsx component //
  return (
    <div className="ui container comments">

      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 3:30PM"
        content="Cool post!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 5:00PM"
        content="Eh, I disagree"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="GC"
        timeAgo="Yesterday at 2:00AM"
        content="🐊"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
