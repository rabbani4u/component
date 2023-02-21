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
      <CommentDetails author="Sam" />
      <CommentDetails author="Alex" />
      <CommentDetails author="Mikel" />
      <CommentDetails author="Sarah" />
      <CommentDetails author="Linck" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
