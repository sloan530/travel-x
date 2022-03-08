import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Alert, TouchableWithoutFeedback, View, SafeAreaView, Image, Button } from 'react-native';

export default function App() {
  //console.log("App executed");
  const handlePress = ()=> console.log("Texed pressed");
  //let x = 1;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={()=>console.log("Image Tapped")}>
      <Image source={require('./assets/logo.png')} />
      </TouchableWithoutFeedback>
      <Button color="#E9672D" title="Get Started!" onPress={()=>console.log("Button Pressed")}/>
    
    </SafeAreaView>
  );
}

//text
//<Text numberOfLines={1} onPress={handlePress}> TravelX</Text>
//network images 
//<Image source = {{
//                  width: 200,
//                  height: 300,
//                  uri: "https://picsum.photos/200/300",
//                }}
//alert(maybe only works in ios)
//onPress={()=>Alert.alert(
//        "My title",
//        "Button Tapped",
//        [{text: "Yes", onPress: ()=> console.log("Yes clicked")},
//         {text: "No", onPress: ()=> console.log("No clicked")}
//        ])}

const styles = StyleSheet.create({
  container: {
    flex: 1, //flexible to the screen
    backgroundColor: '#04041C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
