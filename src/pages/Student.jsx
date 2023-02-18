import React, { useState } from "react";
import styles from "../styles/StudentPage.module.css";

const Student = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.title}>Student Page: {name}</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              aut rem, laudantium quia veritatis minima esse iure eos at officia
              odit corporis ab sint repellendus sit eius quibusdam officiis
              possimus!
            </p>
            <form>
              {/* get value inout */}
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Name"
              />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="mail"
                placeholder="Email"
              />
            </form>
            <h2>{name.length ? name[0] + "." : ""}</h2>
            <h2>{email}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
