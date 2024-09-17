import { useState } from 'react';
import './index.css';
import './cards.css';
import CardDeck from "./lib/CardDeck.ts";
import Card from './Card.tsx'
import CardClass from "./lib/Card.ts";


const App = () => {

    const [cards, setCards] = useState<CardClass[]>([]);

    const giveCards = () => {
        const newDeck = new CardDeck();
        const newCards = newDeck.getCards(5)
        setCards(newCards);
    }

    return (
        <div className="root">
            <div className="playingCards faceImages">
                {cards.map((card, index) => (
                    <Card key={index} rank={card.rank} suit={card.suit}/>
                ))}
            </div>
            <button onClick={giveCards}>Раздать карты</button>
        </div>
    )
}

export default App;





