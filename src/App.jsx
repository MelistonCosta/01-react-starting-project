import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import { User } from "./components/User.jsx";
import { CardsComponent } from "./components/CardsComponent.jsx";


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
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
