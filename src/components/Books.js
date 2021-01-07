import Book from "./Book";
import Data from "./Data";

function Books() {
  return (
    <main className="app-main">
      {Data.map((book, index) => {
        return <Book book={book} />;
      })}
    </main>
  );
}

export default Books;
