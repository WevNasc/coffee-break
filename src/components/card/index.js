import React from 'react';
import { Link } from "gatsby"

import cardStyles from './card.module.css'

export default function Card({title, link, body, date}) {
  return (
    <div className={cardStyles.card}>
      <Link to={link} className={cardStyles.title} >{title}</Link>
      <p className={cardStyles.body}>{body}</p>
      <p className={cardStyles.date}>{date}</p>
    </div>
  );
}