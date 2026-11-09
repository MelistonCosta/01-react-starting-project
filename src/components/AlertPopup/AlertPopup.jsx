import Section from "../Section/Section";
import "./AlertPopup.css"
import { useState } from "react";

export default function AlertPopup() {
    const [showAlert, setShowAlert] = useState(false);
    return (
        <Section id="examples" title="Warning Alert Exercise:">
            <div>
                {showAlert && (
                    <div data-testid="alert" id="alert">
                        <div className="inner-content">
                            <h2>Are you sure?</h2>
                            <p>These changes can't be reverted!</p>
                            <button className="button button-yellow" onClick={() => setShowAlert(false)}>Proceed</button>
                        </div>
                    </div>
                )}
                <button className="button button-red" onClick={() => setShowAlert(true)}>Delete</button>
            </div>
        </Section>
    );
}