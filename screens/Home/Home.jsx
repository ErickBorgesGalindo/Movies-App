import React, { useEffect, useState } from 'react';
import {VStack, ScrollView, HStack, Text, Image, Input, Box} from "native-base";
import { GET } from '../../API/Api';
import { IMAGE_POSTER_URL } from '../../API/Config';
import { Ionicons } from "@expo/vector-icons";

const Home = ({navigation}) => {
    const [movies, setMovies] = useState([]);
    const [time, setTime] = useState([]);
  
    useEffect(()=>{
      const getMovies = async () => {
  
        const response = await GET('/discover/movie');
        setMovies(response.results);
        console.log('=====RESPONSE RESUL======')
        console.log(response.results)
  
  
        // const images = response.results.map((data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`);
        // let backImages = [];
  
        // for(let i = 0; i<10 ; i++){
        //   backImages =[...backImages, images[i]];
        // }
  
        // setImages(backImages);
        // console.log(images)
      };
  
      getMovies();
    },[]);
  
    return (
      <VStack>
        <Text alignSelf={'center'} 
          mt={16} 
          color={'#050C20'}
          fontSize={ 60}
          fontWeight ={'100'}
          textAlign= {'center'}
          letterSpacing={10}> Movies</Text>
          <Input 
              borderBottomColor={'#DD4AA2'}
              borderTopColor = {'#E9EBF1'}
              borderLeftColor = {'#E9EBF1'}
              borderRightColor = {'#E9EBF1'}
              placeholder={'Search'}
              size={'xl'}
              width={80}
              alignSelf={'center'}
              mt={5}
              InputLeftElement={ <Ionicons name="videocam-outline" color={'#DD4AA2'} size={30} />}/>
        <ScrollView>
          <VStack h={3090}>
              {
                movies.map(result=>(
                 <Box>
                   <HStack>
                    <Image source={{uri:`${IMAGE_POSTER_URL}/${result.backdrop_path}`}}  
                      alt={'MoviesImages'} 
                      width={150} 
                      height={100} 
                      mt={10}
                      ml={3}
                      resizeMode={'cover'} 
                      borderRadius={10}
                      key={result.id}
                      onTouchEnd={()=> navigation.navigate('MovieDetail')}/>
                    <VStack>
                      <Text mt={10} ml={3} maxW={200} fontSize={15} bold>{result.title}</Text>
                      <Text mt={2} ml={3} fontSize={15}>{result.release_date.slice(0,4)}</Text>
                      <HStack>
                        <HStack>
                          <Box maxW={10} ml={2} borderRadius={10} mt={3.5} >
                            <Ionicons name="star" color={'#DD4AA2'} size={14}/>
                          </Box>
                          <Text mt={2.5} ml={1} fontSize={15}>{result.vote_average}</Text>
                        </HStack>
  
                        <HStack ml={5}>
                          <Box maxW={10} ml={2} borderRadius={10} mt={3.5} >
                            <Ionicons name="people" color={'#DD4AA2'} size={14}/>
                          </Box>
                          <Text mt={2.5} ml={1} fontSize={15}>{result.vote_count}</Text>
                        </HStack>
                      </HStack>
  
                    </VStack>
                  </HStack>
                 </Box>
                ))
              }
          </VStack>
        </ScrollView>
      </VStack>
  );
};

export default Home;


// import React, { useState } from "react";
// import { StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { VStack, Text, Input, ScrollView, Box, Image, HStack} from "native-base";
// import axios from "axios";

// const Home = () => {
//   const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=15c955f7";
//   const [state, setState] = useState({
//     s: "Enter a movie...",
//     results: [],
//     selected: {},
//   });

//   const search = () => {
//     axios(apiurl + "&s=" + state.s).then(({ data }) => {
//         let results = data.Search
//         console.log(data)
//         console.log("/////THIS IS THE REQUEST////")
//         console.log(request)
//         setState(prevState => {
//             return{...prevState, results: results}
//         });
//     });
//   };

//   return (
//     <VStack style ={styles.container}>
//         <Text style={styles.title}>Movies</Text>
//         <Input 
//             borderBottomColor={'#DD4AA2'}
//             borderTopColor = {'#E9EBF1'}
//             borderLeftColor = {'#E9EBF1'}
//             borderRightColor = {'#E9EBF1'}
//             placeholder={'Search'}
//             size={'xl'}
//             width={80}
//             alignSelf={'center'}
//             mt={10}
//             InputLeftElement={ <Ionicons name="videocam-outline" color={'#DD4AA2'} size={30} />}
//             vale={state.s}
//             onChangeText={text => setState(prevState => {
//                 return{...prevState, s: text}
//             })}
//             onSubmitEditing={search}/>

//         <ScrollView>
//             {state.results.map(result => (
//                 <Box key={result.imbID} py={5} width={300} bg={'#DD4AA2'} mb={5} mt={5} borderRadius={20}>
//                     <Image source={{uri: result.Poster}} width={350} height={350} resizeMode={'contain'} alt={'Movie Poster'}/>
//                     <Text color={'white'} alignSelf={'center'} fontSize={20} bold mt={5}>{result.Title}</Text>
//                     <Text color={'white'} alignSelf={'center'} fontSize={20} bold mt={5}>{result.Genre}</Text>
                    
//                     <HStack alignSelf={'center'} mt={5}>
//                         <Box
//                             bg={'#E9EBF1'}
//                             borderRadius={20}
//                             px={5}
//                             py={2}>
//                             <Text> {result.Year}</Text>
//                         </Box>

//                         <Box
//                             bg={'#E9EBF1'}
//                             borderRadius={20}
//                             px={5}
//                             py={2}
//                             ml={2}>
//                             <Text> {result.Type}</Text>
//                         </Box>
//                     </HStack>

//                 </Box>
//             ))}
//         </ScrollView>
            
//     </VStack>
//   );
// };

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: '#E9EBF1',
//         alignItems: 'center', 
//         justifyContent: 'flex-start',
//         paddingTop: 90,
//         paddingHorizontal: 20
//     },
//     title:{
//         color: '#050C20',
//         fontSize: 60,
//         fontWeight: '700',
//         textAlign: 'center',
//         marginBottom: 20,
//         height: 50,
//         paddingTop:40
//     }
// });

// export default Home;
