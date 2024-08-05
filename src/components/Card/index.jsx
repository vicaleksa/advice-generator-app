import React, {useState, useEffect} from 'react';
import styles from './style.module.css';
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
        <div className={styles.card}>
            <blockquote>
                <p className={styles.card__number}>
                    Advice #{quotes && quotes["slip"]["id"]}
                </p>
                {quotes && (<p className={styles.card__text}>{quotes["slip"]["advice"]}</p>)}
            </blockquote>
            <div className={styles.card_decor}>
                <div className={styles.divider}></div>
                <div className={styles.pause}>
                    <div className={styles.rectangle}></div>
                    <div className={styles.rectangle}></div>
                </div>
                <div className={styles.divider}></div>
            </div>
            <button className={styles.card__button} type='button' onClick={handleClick}>
                <img
                    className={styles.icon}
                    src={IconButton}
                    alt="Icon Button"
                />
            </button>
        </div>
    );
};

export default Card;
