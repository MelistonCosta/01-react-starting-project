import "./TestCards.css"

export default function TestCards({name, children}) {
    return(
        <div className="card">
            <h2>{name}</h2>
            {children}
        </div>
    );
}