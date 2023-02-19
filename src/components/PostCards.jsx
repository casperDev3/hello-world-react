import React from "react";

const PostCards = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="card m-3">
      <div className="card-body">
        {/* x btn */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger btn-sm float-right o">x</button>
        </div>
        <h5
          style={{ color: "#f00", textTransform: "capitalize" }}
          className="card-title"
        >
          {title}
        </h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
};

export default PostCards;
