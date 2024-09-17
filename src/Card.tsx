const suitsObj = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
}

const suitName = {
    diams: 'D',
    hearts: 'H',
    clubs: 'C',
    spades: 'S',
}

const Card = ({rank, suit} : {rank: string, suit: string}) => {
    const suitLetter:string = suitName[suit];
    const imgURL = `/assets/faces/${rank}${suitLetter}.gif`;

    return (
        <>
                <span className="card rank-k diams" style={{backgroundImage: `url(${imgURL})`}}>
                    <span className="rank">{rank}</span>
                    <span className="suit">{suitsObj[suit]}</span>
                </span>
        </>
    )
}

export default Card;