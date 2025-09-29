export default function DevelopmentElement({ titolo, isOpen, onToggle, descrizione }) {
    return (
        <section>
            <div>
                <button onClick={onToggle}>{titolo}</button>
            </div>
            
            {isOpen && (
                <div className="description-container">
                    <h3>{titolo}</h3>
                    <p>{descrizione}</p>
                </div>
            )}
        </section>
)}
