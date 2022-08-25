import React, {useState} from 'react'
import { Linking } from "react-native";
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

const image = { uri: "https://images.pexels.com/photos/7991378/pexels-photo-7991378.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-7991378.jpg&fm=jpg" };

const SignUp = () => {
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

                    <Text alignSelf={'center'} bold fontSize={30}>Hey, Nice to Meet You!</Text>
                    <Input 
                        borderBottomColor={'#DD4AA2'}
                        borderTopColor = {'white'}
                        borderLeftColor = {'white'}
                        borderRightColor = {'white'}
                        placeholder={'User'}
                        size={'xl'}
                        width={80}
                        alignSelf={'center'}
                        mt={7}
                        InputLeftElement={ <Ionicons name="person-outline" color={'#DD4AA2'} size={30} /> }/>
                    <Input 
                        borderBottomColor={'#DD4AA2'}
                        borderTopColor = {'white'}
                        borderLeftColor = {'white'}
                        borderRightColor = {'white'}
                        placeholder={'Email'}
                        size={'xl'}
                        width={80}
                        alignSelf={'center'}
                        mt={7}
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
                        mt={7}
                        type={show ? "text" : "password"} 
                        InputLeftElement={ <Ionicons name="lock-closed-outline" color={'#DD4AA2'} size={30} /> }
                        InputRightElement={ 
                            <Ionicons name={show ? 'eye' : 'eye-off'} 
                            color={'#DD4AA2'} 
                            size={30} 
                            onPress={() => setShow(!show)} /> }/>

                    <Button width={300} height={10} mt={20} colorScheme="secondary" borderRadius={20}  alignSelf={'center'} onPress={()=>navigation.navigate('Login')}>
                        <Text fontSize={15} color={'white'} bold >SignUp</Text>
                    </Button>

                    <Button variant="link" colorScheme="secondary" onPress={()=>Linking.openURL('https://escribecine.com.mx/wp-content/uploads/2020/09/TheDarkKnight.pdf')}> Terms & Conditions </Button>
            </Box>
        </ZStack>
    </VStack>
  )
}

export default SignUp