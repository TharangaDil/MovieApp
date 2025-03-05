import { View,Text,Pressable,StyleSheet,Image } from "react-native";

export default function Home({navigation}){
    return(
        <View>
            <Image source={require('../img/first.jpeg')} />
            <Text>Movie App</Text>
           <Pressable>
           <Image source={require('../img/varisu.jpeg')}/>
            </Pressable> 
        </View>
    )
}