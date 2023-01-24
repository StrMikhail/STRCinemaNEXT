import React from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import { P } from '../P/P';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';

export const Card = ({ film }: CardProps) : JSX.Element => {
    console.log(film)
    return (
        <div className={styles.card}>
                <img className={styles.image} src={film.posterUrlPreview} alt="" />
            <div className={styles.about}>
                <Tag size='m' color='green' className={styles.rating}>{film.rating}</Tag>
                <div className={styles.name}>                
                    <P size='l'>{film.nameRu} ({film.year})</P>
                    <P size='s' className={styles.subname}>{film.nameEn}</P>
                    <div className={styles.genres}>
                        {film.genres.map((item, i) => <Tag key={i} size='s'>{item.genre}</Tag>)}
                    </div>
                    <Rating isEditable rating={Math.floor(+film.rating)}/>                     
                </div>
                {/* <P size='s'>{film.rating}</P> */}
            </div>
        </div>
    )
};

