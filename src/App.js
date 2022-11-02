import React, { useState } from "react";
import "./styles/App.css";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JS", body: "Some decription JS" },
    { id: 2, title: "Python", body: "Some decription Python" },
    { id: 3, title: "PHP", body: "Some decription PHP" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPost([newPost, ...posts]);
  };

  const removePost = (post) => {
    setPost(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPost([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5 mt-3 d-flex justify-content-center">
            <img src={require("./img/react_logo.gif")} alt="logo" />
          </div>
        </div>
      </div>

      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort by ..."
          option={[
            { value: "title", name: "By title" },
            { value: "body", name: "By description" },
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostsList remove={removePost} posts={posts} title="Posts List" />
      ) : (
        <h2 style={{ textAlign: "center" }}>Posts List is empty!</h2>
      )}
    </div>
  );
}

export default App;
