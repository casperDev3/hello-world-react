import React from "react";

const StyleCss = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
          <button className="btn btn-danger" onClick={()=> props.remove(props.post)}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default StyleCss;
