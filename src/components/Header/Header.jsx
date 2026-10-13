import "./Header.css"
import logo from "../../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Core", "Crucial", "Trending", "Best"]

function generateRandomDescription(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const changeDescription = reactDescription[generateRandomDescription(4)];

  return (
      <header>
        <img src={logo} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {changeDescription} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}