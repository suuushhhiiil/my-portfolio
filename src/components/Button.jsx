import React from "react";

export default function Button({ type, label, callFunction }) {
  return (
    <>
      <button
        className={`${
          type === "primary"
            ? `transition-color ease-out duration-500 bg-primary text-button-text`
            : `transition-color ease-out duration-500 bg-secondary text-sec-button-text hover:text-button-text hover:bg-primary`
        } px-4 py-2 rounded-full mx-1 `}
        onClick={callFunction===''?() => console.log('empty'): () => callFunction()}
      >
        {label}
      </button>
    </>
  );
}
