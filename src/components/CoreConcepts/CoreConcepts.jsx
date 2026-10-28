import { CORE_CONCEPTS } from "../../data";
import { CardsComponent } from "../CardComponent/CardsComponent";

export default function CoreConcepts() {
    return (
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
    );
}