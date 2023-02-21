import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetails from "./CommentDetails";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetails author="Sam" timeAgo="Today 12:12AM" />
      <CommentDetails author="Alex" timeAgo="Today 2:12AM" />
      <CommentDetails author="Mikel" timeAgo="Yesterday 6:12PM" />
      <CommentDetails author="Sarah" timeAgo="Today 06:18AM" />
      <CommentDetails author="Linck" timeAgo="Today 17:14AM" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
