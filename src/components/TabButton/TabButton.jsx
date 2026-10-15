import "./TabButton.css"

export default function TabButton({children}) {

    function TabClick() {
        console.log("Hello World !");
    }

    return (
        <li>
            <button onClick={TabClick}>{children}</button>
        </li>
    );
}