import "./css/Book.css";

function Book(props) {
  console.log("props", props);
  const { book } = props;
  console.log("this is a book", book);

  return (
    <main className="app-view">
      <div className="single-book">
        <h1 className="book-title">{book.title}</h1>
        <h2 className="book-author">by: {book.author}</h2>
        <img src={book.image} alt="" />
        <p>{book.description}</p>
      </div>
    </main>
  );
}

export default Book;
