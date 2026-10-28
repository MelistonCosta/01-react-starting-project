import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import { User } from "./components/User/User.jsx";
import TestCards from "./components/TestCards/TestCards.jsx";
import AlertPopup from "./components/AlertPopup/AlertPopup.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabExamples from "./components/TabExamples/TabExamples.jsx";

function App() {
  const [price, setPrice] = useState(1000);
  const [priceText, setpriceText] = useState("to be paid");
    function applyDiscount() {
        setPrice(750);
        setpriceText("after discount");
    }

  return (
    <>
      <Header />
      <User />
      <main>
        <h2>Time to get started!!!</h2>
        <CoreConcepts />
        <TabExamples />
        <section id="examples">
          <h2>Cards Exercise: Available Experts</h2>
          <TestCards name="Anthony Blake">
            <p>Blake is a professor of Computer Science at the University of Illinois.</p>
            <p><a href="mailto:anthony@example.com">Email Anthony</a></p>
          </TestCards>
          <TestCards name="Maria Miles">
            <p>Maria is a professor of Computer Science at the University of Illinois.</p>
            <p><a href="mailto:maria@example.com">Email Maria</a></p>
          </TestCards>
        </section>
        <section id="examples">
          <h2>Discount Exercise:</h2>
          <div>
            <p data-testid="price">Total amount {priceText}: ₹{price}/-</p>
            <button className="button" onClick={applyDiscount}>Apply Discount</button>
          </div>
        </section>
        <AlertPopup />
      </main>
    </>
  );
}

export default App;
