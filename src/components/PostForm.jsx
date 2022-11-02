import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

export default function PostForm({ create }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function addNewPost(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    create(newPost);
    setTitle("");
    setBody("");
  }

  return (
    <form>
      <MyInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title post"
      />
      <MyInput
        value={body}
        onChange={(e) => setBody(e.target.value)}
        type="text"
        placeholder="Description post"
      />
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  );
}
