import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VStack, Text, Input, ScrollView, Box, Image, HStack} from "native-base";
import axios from "axios";
import request from "../../API/Api";

const Home = () => {
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=15c955f7";
  const [state, setState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {},
  });

  const search = () => {
    axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search
        console.log(data)
        console.log("/////THIS IS THE REQUEST////")
        console.log(request)
        setState(prevState => {
            return{...prevState, results: results}
        });
    });
  };

  return (
    <VStack style ={styles.container}>
        <Text style={styles.title}>Movies</Text>
        <Input 
            borderBottomColor={'#DD4AA2'}
            borderTopColor = {'#E9EBF1'}
            borderLeftColor = {'#E9EBF1'}
            borderRightColor = {'#E9EBF1'}
            placeholder={'Search'}
            size={'xl'}
            width={80}
            alignSelf={'center'}
            mt={10}
            InputLeftElement={ <Ionicons name="videocam-outline" color={'#DD4AA2'} size={30} />}
            vale={state.s}
            onChangeText={text => setState(prevState => {
                return{...prevState, s: text}
            })}
            onSubmitEditing={search}/>

        <ScrollView>
            {state.results.map(result => (
                <Box key={result.imbID} py={5} width={300} bg={'#DD4AA2'} mb={5} mt={5} borderRadius={20}>
                    <Image source={{uri: result.Poster}} width={350} height={350} resizeMode={'contain'} alt={'Movie Poster'}/>
                    <Text color={'white'} alignSelf={'center'} fontSize={20} bold mt={5}>{result.Title}</Text>
                    <Text color={'white'} alignSelf={'center'} fontSize={20} bold mt={5}>{result.Genre}</Text>
                    
                    <HStack alignSelf={'center'} mt={5}>
                        <Box
                            bg={'#E9EBF1'}
                            borderRadius={20}
                            px={5}
                            py={2}>
                            <Text> {result.Year}</Text>
                        </Box>

                        <Box
                            bg={'#E9EBF1'}
                            borderRadius={20}
                            px={5}
                            py={2}
                            ml={2}>
                            <Text> {result.Type}</Text>
                        </Box>
                    </HStack>

                </Box>
            ))}
        </ScrollView>
            
    </VStack>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#E9EBF1',
        alignItems: 'center', 
        justifyContent: 'flex-start',
        paddingTop: 90,
        paddingHorizontal: 20
    },
    title:{
        color: '#050C20',
        fontSize: 60,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        height: 50,
        paddingTop:40
    }
});

export default Home;
