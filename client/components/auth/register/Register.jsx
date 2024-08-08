import { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";

import styles from "./register.style";


const Register = () => {
    const [username, setUsername] = useState('');
    const [key, setKey] = useState('');

    return (
        <View style={styles.container}>
            <Text>Register</Text>
            
            {/* --USERNAME-- INPUT */}
            <TextInput style={styles.inField} 
                onChangeText={setUsername}
                value={username} 

                placeholder="Username"
                keyboardType="default"
            />

            {/* --KEY-- INPUT */}
            <TextInput style={styles.inField} 
                onChangeText={setKey}
                value={key}

                placeholder="Password"
                keyboardType="default"
            />

            {/* --SUBMIT-- INPUT */}
            <Button style={styles.submitBtn}
                title="Get Started"
                // onPress={}
            />
        </View>


    )
}

export default Register;