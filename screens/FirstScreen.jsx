import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  Image,
  HStack,
  VStack,
  Text,
  Button,
} from "native-base";

const image = {
  uri: "https://images.pexels.com/photos/6188194/pexels-photo-6188194.jpeg?cs=srgb&dl=pexels-terrance-barksdale-6188194.jpg&fm=jpg",
};

const FirstScreen = ({navigation}) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image} opacity={0.9}>
        <VStack>
            <Image
            source={require("../assets/images/logo.png")}
            alt={"LogoApp"}
            width={300}
            height={150}
            alignSelf={'center'}
            mb={300}
            />

            <Button width={150} height={10} mt={10} colorScheme="secondary" borderRadius={20}  alignSelf={'center'} onPress={()=>navigation.navigate('Login')}>
                <Text fontSize={15} color={'white'} bold >Login</Text>
            </Button>

            <HStack alignSelf={'center'} mt={2}>
                <Text pt={3} color={'white'}>Don't have an account?</Text>
                <Button variant="link" colorScheme="secondary" onPress={()=>navigation.navigate('SignUp')} bold> Sign Up </Button>
            </HStack>

        </VStack>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default FirstScreen;
