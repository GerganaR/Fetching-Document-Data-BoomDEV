import React, { useState } from "react";
import styles from "./Document.module.css";

export default function Document(props) {
  const [isRead, setisRead] = useState(false);

  const handleScroll = () => {
    let content = document.getElementsByClassName("content")[0];

    if (content.scrollTop + content.offsetHeight >= content.scrollHeight) {
      setisRead(true);
    }
  };

  return (
    <div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content} onScroll={handleScroll}>
        {props.content}
      </div>

      {isRead ? (
        <button className={styles.allowed}>I agree</button>
      ) : (
        <button className={styles.notAllowed}>I agree</button>
      )}
    </div>
  );
}
