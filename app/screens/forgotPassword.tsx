import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from "react-native";


export default function ForgotPassword() {

    const [email, setEmail] = useState("")

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>Esqueceu sua Senha?</Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.text}>
                    Vamos te ajudar a recuperar sua conta.
                    Digite seu e-mail de cadastro
                </Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#000"
                    placeholder="Digite seu email"
                    onChangeText={setEmail}
                    value={email}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Enviar link De Redefiniçao</Text>
                </TouchableOpacity>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    containerInput: {
        alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        fontSize: 22,
        textAlign: "center",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        marginTop: 150,
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1E4D6B'
    },
    input: {
        marginTop: 40,
        paddingLeft: 10,
        width: 280,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: '#fff'
    },
    logo:{
        width: 500,
        height: 500,
        opacity: 0.5
    },
    button: {
        width: 200,
        height: 35,
        backgroundColor: '#2A5C5E',
        borderWidth: 0.5,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    buttonText:{
        color: "#fff"
    }
})