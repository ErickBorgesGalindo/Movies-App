import React, {useState} from 'react'
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  ZStack,
  VStack,
  Image,
  Box,
  Text,
  Input,
  Button
} from "native-base";

const image = { uri: "https://images.pexels.com/photos/2398354/pexels-photo-2398354.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2398354.jpg&fm=jpg" };

const Login = ({navigation}) => {
  const [show, setShow] = useState(false);
  return (
    <VStack>
        <ZStack>
            <Image
                source={image}
                alt={"LogoApp"}
                width={500}
                height={400}
                alignSelf={'center'}
                mt={0}/>

            <Image
            source={require("../assets/images/logo.png")}
            alt={"LogoApp"}
            width={300}
            height={150}
            alignSelf={'center'}
            mt={10}/>

            <Box safeArea 
                bg={'white'}
                width={390}
                height={500}
                mt={350}
                roundedTop={50}>

                    <Text alignSelf={'center'} bold fontSize={30}>Welcome to Movies</Text>
                    <Input 
                        borderBottomColor={'#DD4AA2'}
                        borderTopColor = {'white'}
                        borderLeftColor = {'white'}
                        borderRightColor = {'white'}
                        placeholder={'Email'}
                        size={'xl'}
                        width={80}
                        alignSelf={'center'}
                        mt={5}
                        InputLeftElement={ <Ionicons name="mail-outline" color={'#DD4AA2'} size={30} /> }/>

                    <Input
                        borderBottomColor={'#DD4AA2'}
                        borderTopColor = {'white'}
                        borderLeftColor = {'white'}
                        borderRightColor = {'white'}
                        placeholder={'Password'}
                        size={'xl'}
                        width={80}
                        alignSelf={'center'}
                        mt={10}
                        type={show ? "text" : "password"} 
                        InputLeftElement={ <Ionicons name="lock-closed-outline" color={'#DD4AA2'} size={30} /> }
                        InputRightElement={ 
                            <Ionicons name={show ? 'eye' : 'eye-off'} 
                            color={'#DD4AA2'} 
                            size={30} 
                            onPress={() => setShow(!show)} /> }/>

                    <Button width={300} height={10} mt={20} colorScheme="secondary" borderRadius={20}  alignSelf={'center'} onPress={()=>navigation.navigate('Navigation')}>
                        <Text fontSize={15} color={'white'} bold >Login</Text>
                    </Button>

                    <Button variant="link" colorScheme="secondary" onPress={()=>navigation.navigate('Recovery')}> Forgot Password? </Button>
            </Box>
        </ZStack>
    </VStack>
  )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center"
    }
  });

export default Login