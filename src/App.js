import Header from "./components/Header";
import Book from "./components/Book.js";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Book
        title="The Power of Now"
        image="https://images-na.ssl-images-amazon.com/images/I/41cbPheOxmL._SX323_BO1,204,203,200_.jpg"
        description="Lorem ipsum dolor sit amet, cum aliquam salutandi expetenda in, vel ea elit quando. Cu cum utroque deserunt referrentur. Eum inermis conceptam disputationi ut, graeco placerat intellegam eum id. Has pertinacia scriptorem at, veniam nominavi no eum. Mei in zril euismod, sumo rebum placerat sea."
      />
      <Book
        title="The Alchemist"
        image="https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL.jpg"
        description="Lorem ipsum dolor sit amet, meliore assentior at his, cu nec quidam aliquando similique, ea eum discere necessitatibus. Quem harum invenire ne mel, his ne sonet intellegam deterruisset, sadipscing liberavisse mea ei. Duo te nostro iisque appareat, wisi oportere ne ius. Pri velit cetero eruditi."
      />
      <Footer />
    </div>
  );
}

export default App;
