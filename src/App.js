import React, { useState } from "react";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "js", body: "Some decription" },
    { id: 2, title: "jsx", body: "Some decription" },
    { id: 3, title: "JS", body: "Some decription" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPost([...posts, newPost]);
  };

  const removePost = (post) => {
    setPost(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPost([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
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
