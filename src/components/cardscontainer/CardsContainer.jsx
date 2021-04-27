import Card from '../card/Card';

function CardsContainer(props) {
    return (
        <div className="cards grid">
            <div className="cards-container row">
                {props.data.map((card, i) => <Card key={i} section={card} />)}
            </div>
        </div>
    );
}
export default CardsContainer;