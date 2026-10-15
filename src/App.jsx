import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import { User } from "./components/User/User.jsx";
import { CardsComponent } from "./components/CardComponent/CardsComponent.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import TestCards from "./components/TestCards/TestCards.jsx";

function App() {
  return (
    <div>
      <Header />
      <User />
      <main>
        <h2>Time to get started!!!</h2>
        <section id="core-concepts">
          <ul>
            <CardsComponent
              title = {CORE_CONCEPTS[0].title}
              description= {CORE_CONCEPTS[0].description}
              image= {CORE_CONCEPTS[0].image}
            />
            <CardsComponent
              title = {CORE_CONCEPTS[1].title}
              description= {CORE_CONCEPTS[1].description}
              image= {CORE_CONCEPTS[1].image}
            />
            <CardsComponent
              title = {CORE_CONCEPTS[2].title}
              description= {CORE_CONCEPTS[2].description}
              image= {CORE_CONCEPTS[2].image}
            />
            <CardsComponent
              title = {CORE_CONCEPTS[3].title}
              description= {CORE_CONCEPTS[3].description}
              image= {CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Tab Buttons</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
        <section id="examples">
          <h2>Cards Exercise: Available Experts</h2>
          <TestCards name="Anthony Blake">
            <p>Blake is a professor of Computer Science at the University of Illinois.</p>
            <p><a href="mailto:blake@example.com">Email Anthony</a></p>
          </TestCards>
          <TestCards name="Maria Miles">
            <p>Maria is a professor of Computer Science at the University of Illinois.</p>
            <p><a href="mailto:blake@example.com">Email Maria</a></p>
          </TestCards>
        </section>
      </main>
    </div>
  );
}

export default App;
