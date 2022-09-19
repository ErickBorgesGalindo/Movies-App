import React, { useEffect, useState } from 'react';
import {Box, Image, Text, VStack, ZStack} from 'native-base';
import { GET } from '../../API/Api';
import { IMAGE_POSTER_URL } from '../../API/Config';

const MovieDetail = props => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState();

  useEffect(()=>{
    const getDetails = async () => {

      const data = await GET(`/movie/${props.route.params.movieId}`);
      console.log('===== DETAILS RESPONSE ======');
      console.log(data);
      setDetails(data);
      setLoading(false);
    };

    getDetails();
  },[]);

  return (
    <VStack>
        {/* <Text>MovieDetail</Text>
        <Text>{props.route.params.movieId}</Text> */}

        {
          <Box mt={20} pt={5}>
            <ZStack>
              <Image source={{uri:`${IMAGE_POSTER_URL}${details.backdrop_path}`}} 
              alt='background'
              width={'100%'} 
              height={250}/>
              <Text mt={170} ml={5} fontSize={30} bold>{details.original_title}</Text>
            </ZStack>
          </Box>
          // <Text>{IMAGE_POSTER_URL}{details.backdrop_path}</Text>
        }


    </VStack>
  )
}

export default MovieDetail