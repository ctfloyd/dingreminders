import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Cochin'
    }
});

const HomeScreen = ({navigation}: any) => {
    const [value, onChangeText] = React.useState('What is your favorite sticker?');

    return  (
    <View style={styles.root}>
        <Text style={styles.text}>Welcome to sticker mania!</Text>
        <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1, minWidth: 300, maxWidth: 300}}
            onChangeText={text => onChangeText(text)}
            value={value}/>
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
    )
}

export default HomeScreen;