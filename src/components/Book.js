import React from "react";
import "./css/Book.css";

function Book(props) {
  return (
    <main className="app-view">
      <div className="single-book">
        <h1 className="book-title">{props.title}</h1>
        <img src={props.image} alt="" />
        <p>{props.description}</p>
      </div>
    </main>
  );
}

export default Book;
