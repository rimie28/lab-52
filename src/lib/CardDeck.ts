import CardClass from "./Card.ts";

class CardDeck {
   allCards: CardClass[] = [];

   constructor() {
      const allRanks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const allSuits = ['diams', 'hearts', 'clubs', 'spades'];

      for(const rank of allRanks) {
         for(const suit of allSuits) {
            this.allCards.push(new CardClass(rank, suit));
         }
      }

   }

   getCard():CardClass {
      const randomCard = Math.floor(Math.random() * this.allCards.length);
      return this.allCards.splice(randomCard, 1)[0];
   }

   getCards(hohMany:number):CardClass[] {
      const cardsArray:CardClass[] = [];
      for (let i = 0; i < hohMany; i++) {
         const card = this.getCard();
         cardsArray.push(card);
      }
      return cardsArray;
   }
}

export default CardDeck;