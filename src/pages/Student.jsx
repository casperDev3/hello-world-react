import React, { useState } from "react";
import styles from "../styles/StudentPage.module.css";
import PostCard from "../components/PostCards";

const Student = () => {
  //1. Create a state variable to store the posts
  let [posts, setPosts] = useState([]);
  //2. Create a function to fetch the posts from the API
  async function getPosts() {
    const DATA = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    //3. Set the posts state variable to the data
    setPosts(DATA);
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.title}>Student Page</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              aut rem, laudantium quia veritatis minima esse iure eos at officia
              odit corporis ab sint repellendus sit eius quibusdam officiis
              possimus!
            </p>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div onClick={getPosts} className="btn btn-warning">
                Show Posts
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* Display posts */}
                {posts.map((post) => {
                  return (
                    <PostCard key={post.id}/>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Student;
