export default function DevelopmentElement(props) {


    const { titolo, descrizione, isOpen, onToggle } = props;


    return (
        <div>
            <button onClick={onToggle}>
                {titolo}
            </button>
            
            {isOpen && <div>
                    <h3>{titolo}</h3>
                    <p>{descrizione}</p>
                </div>}
        </div>
    );
}