import React from 'react';
import '../assets/NewsCard.css';
import { Button } from '@mui/material';



function NewsCard(props) {
    const { avatar, title, content } = props;

    return (
        <div className="news-card">


            <div className="container">

                <div className="avatar-container">
                    <img src={avatar} alt="User Avatar" className="avatar" />
                </div>

                <p className="limited-text">nostr:0x1323131231213147</p>
                <div className="button-container">
                    <button className="oval-button">协调数据</button>
                </div>


            </div>





            <h2 className="title">{title}</h2>

            <p className="content">{content}</p>

        </div>
    );
}

export default NewsCard;
