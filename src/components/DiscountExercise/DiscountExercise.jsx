import { useState } from "react";
import Section from "../Section/Section";

export default function DiscountExercise() {
    const [price, setPrice] = useState(1000);
    const [priceText, setpriceText] = useState("to be paid");
    function applyDiscount() {
        setPrice(750);
        setpriceText("after discount");
    }
    return (
        <Section id="examples" title="Discount Exercise:">
            <div>
                <p data-testid="price">Total amount {priceText}: ₹{price}/-</p>
                <button className="button" onClick={applyDiscount}>Apply Discount</button>
            </div>
        </Section>
    )
}