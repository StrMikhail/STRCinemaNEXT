import { ReactNode } from 'react';
import { FilmItem } from '../../interfaces/topFilms.interface';

export interface CardProps {
    // tag: 'h1' | 'h2' | 'h3';
    // children: ReactNode;
    film: FilmItem;
}