import { useState } from "react";

export default function DiscountExercise() {
    const [price, setPrice] = useState(1000);
    const [priceText, setpriceText] = useState("to be paid");
    function applyDiscount() {
        setPrice(750);
        setpriceText("after discount");
    }
    return (
        <section id="examples">
            <h2>Discount Exercise:</h2>
            <div>
            <p data-testid="price">Total amount {priceText}: ₹{price}/-</p>
            <button className="button" onClick={applyDiscount}>Apply Discount</button>
            </div>
        </section>
    )
}