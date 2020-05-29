import React from 'react';
import cardStyles from './card.module.css'

export default function Card({title, body, date}) {
  return (
    <div className={cardStyles.card}>
      <a href="#" className={cardStyles.title} >{title}</a>
      <p className={cardStyles.body}>{body}</p>
      <p className={cardStyles.date}>{date}</p>
    </div>
  );
}