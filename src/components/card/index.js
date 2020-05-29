import React from 'react';
import cardStyles from './card.module.css'

export default function Card({title, body, date}) {
  return (
    <div className={cardStyles.card}>
      <p className={cardStyles.title}>{title}</p>
      <p className={cardStyles.body}>{body}</p>
      <p className={cardStyles.date}>{date}</p>
    </div>
  );
}