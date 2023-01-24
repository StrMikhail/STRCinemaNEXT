import React from 'react';
import { Card } from './Card';
import { CardListProps } from './CardList.props';
import styles from './Card.module.css';

export const CardList = ({ films }: CardListProps) : JSX.Element => {
    console.log(films)
    return (
        <div className={styles.list}>
            {films.map((film) => <Card key={film.filmId} film={film}/>)}
        </div>
    );
};
