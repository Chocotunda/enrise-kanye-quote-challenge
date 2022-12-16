import React, { useState } from 'react';
import './header.css';
import kanyeHead from '../../assets/kanye_head.png';

const Header = () => {
    const [quote, changeQuote] = useState("");

    const getQuote = () => {
        const url = "https://api.kanye.rest/";
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                changeQuote(res.quote)
            });
    }

    if (quote === "") {
        getQuote();
    }

    const RenderQuote = () => (
        <>
            <p className="gradient__text text-focus-in">"{quote}"</p>
        </>
    )

    return (
    <div className="kanye__header section__padding">
        <div className="kanye__header-content">
            <h1>Kanye West quotes</h1>

            <RenderQuote />
            <div className="kanye__header-content__buttons">
            <button type="button" onClick={getQuote}>Get new quote</button>
            </div>

        </div>

        <div className="kanye__header-image">
            <img src={kanyeHead} alt="Kanye West"/>
        </div>
    </div>
)};

export default Header;
