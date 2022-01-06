import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerCarousel,
  ContainerList
} from "./styles";

import Carousel from './Carousel'
import List from '../../components/List'
import { GetFilmsNowPlaying, GetFilmsTrending, GetFilmsLatest, GetFilmsUpComing, GetGenres } from "../../services/filmsApi"


const Home = () => {
  const [listTrending, setListTrending] = useState([]);
  const [listNowPlaying, setListNowPlaying] = useState([]);
  const [listLatest, setListLatest] = useState([]);
  const [listUpComing, setListUpComing] = useState([]);

  const getFilmsTrending = async () => {
    const response = await GetFilmsTrending(8)
    setListTrending(response.data.results)
  }

  const getFilmsNowPlaying = async () => {
    const response = await GetFilmsNowPlaying(1)
    setListNowPlaying(response.data.results)
  }

  const getFilmsLatest = async () => {
    const response = await GetFilmsLatest(1)
    setListLatest(response.data.results)
  }

  const getFilmsUpComing = async () => {
    const response = await GetFilmsUpComing(3)
    setListUpComing(response.data.results)
  }



  useEffect(() => {
    getFilmsTrending();
  }, [])

  useEffect(() => {
    getFilmsNowPlaying();
  }, [])

  useEffect(() => {
    getFilmsLatest();
  }, [])

  useEffect(() => {
    getFilmsUpComing();
  }, [])



  return (
    <Container>
      
      <ContainerCarousel>
        <Carousel list={listTrending} />
      </ContainerCarousel>
      <ContainerList>
        <List list={listNowPlaying} title="Em Alta" trending={true} />
      </ContainerList>
      <ContainerList>
        <List list={listLatest} title="Melhor Avaliados" />
      </ContainerList>
      <ContainerList>
        <List list={listUpComing} title="Em Breve" />
      </ContainerList>

    </Container>
  );
};

export default Home;
