import "./CardsComponent.css"
export function CardsComponent(card) {
  return (
    <li>
      <img src={card.image} alt={card.title} />
      <h2>{card.title}</h2>
      <p>{card.description}</p>
    </li>
  );
}