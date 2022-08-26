import React, { useEffect, useState } from 'react';
import {View, Text, Image} from "native-base";
import { GET } from '../../API/Api';
import { IMAGE_POSTER_URL } from '../../API/Config';

const Setttings = () => {

  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(()=>{
    const getMovies = async () => {
      const response = await GET('/discover/movie');
      setMovies(response.results);

      const images = response.results.map((data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`);
      let backImages = [];

      for(let i = 0; i<10 ; i++){
        backImages =[...backImages, images[i]];
      }

      setImages(backImages);
      console.log(images)
    };

    getMovies();
  },[]);

  return (
    <View>
      <Text>Settins</Text>
    </View>
  );
};

export default Setttings