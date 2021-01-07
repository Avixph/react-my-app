import "./css/Header.css";

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">Book App</h1>
      <nav>
        <ul>
          <li>
            <a href="public/index.html">Home</a>
          </li>
          <li>
            <a href="public/index.html">Books</a>
          </li>
          <li>
            <a href="public/index.html">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
