import React, { useState }  from 'react';

import { View, Text, Button, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Screen2({navigation}, input) {
  const [name , setName] = useState('')
  return (
    <SafeAreaView style = {styles.container}>
      <View style={{flex: 0.9, justifyContent: 'flex-start'}}>
      <TextInput
        placeholder = "type text here"
        onChangeText = {name => setName(name)}
        />
        <Text style = {{fontSize:32}}>Welcome , {name}!</Text>
      </View>
      <View style = {{flex: 0.1 , alignItems: "center", justifyContent: 'flex-end'}}>
      <Button
        title="Go To About" 
        onPress={() => navigation.navigate('Screen3')}
        style = {{alignItems: 'flex-end'}}
      />
      <Button
        title="Go To Other" 
        onPress={() => navigation.navigate('Screen1')}
        style = {{alignItems: 'flex-start'}}
      />
    </View>
    </SafeAreaView>
  );
}

function Screen3() {
  return (
    <SafeAreaView style = {styles.container}>
    <View style={{alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {{fontSize: 40}}>About!</Text>
      <Text>This app is still being built. There is so much to do</Text>
    </View>
    </SafeAreaView>
  );
}

function Screen1({navigation}){
  return (
    <SafeAreaView style = {{flex: 1}}>
    <View style = {{flex:0.5, backgroundColor:'red', alignItems: 'center' , justifyContent:'center'}}>
      <TextInput
        placeholder="Text Here"
    />
      </View>
      <View style = {{flex: 0.5, alignItems: "center", justifyContent:"flex-end"}}>
    </View>
    </SafeAreaView>

  )
}
const Stack = createNativeStackNavigator();


function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen2">
        <Stack.Screen name = "Screen1" component = {Screen1}/>
        <Stack.Screen name="Screen2" component={Screen2}/>
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  }});