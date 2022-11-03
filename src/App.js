import React, { useState } from "react";
import "./styles/App.css";
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import { usePosts } from "./hooks/usePosts";

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JS", body: "Some decription JS" },
    { id: 2, title: "Python", body: "Some decription Python" },
    { id: 3, title: "PHP", body: "Some decription PHP" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPost([newPost, ...posts]);
    setModal(false);
  };

  const hiddenModal = (e) => {
    e.preventDefault();
    setModal(false);
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
      <button onClick={(e) => setModal(true)} className="btn btn-primary">
        Create Post
      </button>
      <MyModal visible={modal} setVisible={hiddenModal}>
        <PostForm create={createPost} reject={hiddenModal} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostsList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts List"
      />
    </div>
  );
}

export default App;
