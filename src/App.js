import React, { useState, useMemo } from "react";
import "./styles/App.css";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JS", body: "Some decription JS" },
    { id: 2, title: "Python", body: "Some decription Python" },
    { id: 3, title: "PHP", body: "Some decription PHP" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("DO THIS FUNCTION getSortedPosts");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLocaleLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPost([newPost, ...posts]);
  };

  const removePost = (post) => {
    setPost(posts.filter((p) => p.id !== post.id));
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
      <PostFilter filter={filter} setFilter={setFilter}/>
       <PostsList remove={removePost} posts={sortedAndSearchedPosts} title="Posts List" />
    </div>
  );
}

export default App;
