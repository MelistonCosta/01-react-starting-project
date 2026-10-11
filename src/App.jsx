import logo from "./assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Core", "Crucial", "Trending", "Best"]

function generateRandomDescription(max) {
  return Math.floor(Math.random() * (max + 1));
}

export const userData = {
  firstName: 'Meliston',
  lastName: 'Costa',
  designation: 'React Developer',
};

export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>Hi this is {userData.firstName} {userData.lastName}, I'm a {userData.designation}</h2>
      <p></p>
    </div>
  );
}

function Header() {
  const changeDescription = reactDescription[generateRandomDescription(4)];

  return (
      <header>
        <img src={logo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {changeDescription} React concepts you will need for almost any app you are
          going to build!
        </p>
        <User />
      </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!!!</h2>
      </main>
    </div>
  );
}

export default App;
