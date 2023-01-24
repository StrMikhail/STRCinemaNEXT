import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, P, Rating, Tag, Card, CardList } from '../components';
import {withLayout} from '../layout/Layout';
import axios from 'axios';
import { FilmList, FilmItem } from '../interfaces/topFilms.interface';


function Home({ pages, films } : HomeProps):JSX.Element {
  console.log(Array(pages))
  const [rating, setRating] = useState<number>(4)
  return (
      <>
        {/* <Htag tag='h1'>Текст о чем-то</Htag>
        <Htag tag='h2'>Текст о чем-то</Htag>
        <Htag tag='h3'>Текст о чем-то</Htag>
        <Button mode='primary'>Кнопка</Button>
        <Button mode='ghost' arrow="down">Кнопка</Button>
        <Button mode='ghost' arrow='right'>Кнопка</Button>
        <P size='s'>Small Word</P>
        <P size='m'>Medium Word</P>
        <P size='l'>Large Word</P>
        <Tag size='s'>Medium</Tag>
        <Tag size='m' color='red'>Medium</Tag>
        <Tag size='s' color='green' >Medium</Tag>
        <Tag color='primary'>Medium</Tag>
        <Rating rating={rating} isEditable setRating={setRating}/> */}
        <CardList films={films}></CardList>
        {[...Array(pages)].map((_, i) => <Button mode='ghost'>{i + 1}</Button>)}
      </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  axios.defaults.headers.common = {
    "X-API-Key": '4850b2a4-cabb-4f14-95eb-172547a40b2d',
  };
  const {data} = await axios.get<FilmList>(process.env.NEXT_PUBLIC_DOMAIN + '/films/top');
  return {
    props: {
      pages: data.pagesCount,
      films: data.films
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  films: FilmItem[];
  pages: number;
}