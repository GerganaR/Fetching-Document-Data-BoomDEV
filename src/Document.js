import react from "react";
import { useRef, useState } from "react";

export default function Document({ title, content }) {
  const [disabled, setDisabled] = useState(true);
  const listInnerRef = useRef();

  function handleScroll() {
    if (
      listInnerRef.current.offsetHeight + listInnerRef.current.scrollTop >=
      listInnerRef.current.scrollHeight
    ) {
      setDisabled((disabled) => false);
      console.log("reached it");
    }
  }

  return (
    <div>
      <h1 className="title">{title}</h1>
      <div
        className="content"
        onScroll={handleScroll}
        ref={listInnerRef}
        style={{ overflow: "auto", width: "600px", height: "400px" }}
      >
        {content}
      </div>
      <button type="button" disabled={disabled}>
        I Agree!
      </button>
    </div>
  );
}
