import React, {useState, useEffect} from 'react';
import './style.css';
import IconButton from '/src/svg/icon-dice.svg';

function Card() {
    const [quotes, setQuote] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.adviceslip.com/advice')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setQuote(data);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.message);
            })
    }, []);

    const handleClick = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://api.adviceslip.com/advice')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setQuote(data);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.message);
            })
    }

    return (
        <div className="card">
            <blockquote>
                <p className="card__number">
                    Advice #{quotes && quotes["slip"]["id"]}
                </p>
                {quotes && (<p className="card__text">{quotes["slip"]["advice"]}</p>)}
            </blockquote>
            <div className='card_decor'>
                <div className='card_decor-divider'></div>
                <div className='card_decor-pause'>
                    <div className='card_decor-rectangle'></div>
                    <div className='card_decor-rectangle'></div>
                </div>
                <div className='card_decor-divider'></div>
            </div>
            <button className="card__button" type='button' onClick={handleClick}>
                <img
                    className="card__button-icon"
                    src={IconButton}
                    alt="Icon Button"
                />
            </button>
        </div>
    );
};

export default Card;
