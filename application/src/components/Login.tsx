import React from 'react';
import { StyleSheet, TextInput as RNTextInput } from 'react-native';
import { Button, TextInput, Card, Title } from 'react-native-paper'

const styles = StyleSheet.create({
    margins: {
        margin: 3
    }
});

const Login = ({navigation}: any) => {
    const [emailText, setEmailText] = React.useState('');
    const [passwordText, setPasswordText] = React.useState('');
    const passwordInput = React.useRef<RNTextInput>(null);

    return (
        <Card>
            <Card.Content>
                <Title
                    style={styles.margins}
                >Login To Sticker Reminders</Title>
                <TextInput
                    label="Email"
                    value={emailText}
                    onChangeText={text => setEmailText(text)}
                    autoCorrect={false}
                    onSubmitEditing={() => passwordInput && passwordInput.current && passwordInput.current.focus()}
                    style={styles.margins}
                />
                <TextInput
                    label="Password"
                    value={passwordText}
                    onChangeText={text => setPasswordText(text)}
                    autoCorrect={false}
                    secureTextEntry={true}
                    style={styles.margins}
                    ref={passwordInput}
                />
                <Button 
                    mode="contained" 
                    onPress={() => navigation.navigate('Home')}
                    style={styles.margins}
                >Login</Button>
            </Card.Content>
        </Card>
    )
}

export default Login;