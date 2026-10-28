import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import { User } from "./components/User/User.jsx";
import { CardsComponent } from "./components/CardComponent/CardsComponent.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import TestCards from "./components/TestCards/TestCards.jsx";
import { EXAMPLES } from "./data.js";
import AlertPopup from "./components/AlertPopup/AlertPopup.jsx";

function App() {
  const [ selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedTab) {
    // console.log("Tab selected:", selectedTab);
    // tabContent = selectedTab;
    setSelectedTopic(selectedTab);
    // console.log(selectedTopic);
  }

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
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map( (conceptItem) => (
              <CardsComponent key={conceptItem.id} {...conceptItem} />
            ))}
            {/* <CardsComponent
              title = {CORE_CONCEPTS[0].title}
              description= {CORE_CONCEPTS[0].description}
              image= {CORE_CONCEPTS[0].image}
              />
            <CardsComponent {...CORE_CONCEPTS[1]} />
            <CardsComponent {...CORE_CONCEPTS[2]} />
            <CardsComponent {...CORE_CONCEPTS[3]} />
            <CardsComponent {...CORE_CONCEPTS[4]} />
            <CardsComponent {...CORE_CONCEPTS[5]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Tab Buttons</h2>
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            { !selectedTopic ? (
              <h3>Please select a topic</h3>
              ) : (
              <div>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre> 
              </div>
              ) }
          </div>
        </section>
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
