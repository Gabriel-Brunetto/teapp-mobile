import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import userHooks from '../hooks/useUsers'
import ForgotPassword from './forgotPassword'


export default function LoginScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={styles.colorBack}>
                <View style={styles.inputContainer}></View>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    placeholderTextColor='#000'
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    placeholderTextColor='#000'
                    onChangeText={setPassword}
                    value={password}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button]} onPress={() => router.replace('/screens/screening')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.buttonLogin]} onPress={() => router.replace('/screens/register')}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.forgotPassword} onPress={() => router.push('/screens/forgotPassword')}>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: 150 }}>
                    <Text>Developed By Gabriel Brunetto</Text>
                </View>
                <View />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        marginTop: 100,
        fontSize: 64,
        fontWeight: 'bold',
        color: '#1E4D6B'
    },
    logo: {
        marginTop: -70,
        width: 350,
        height: 350
    },
    colorBack: {
        height: 500,
        width: '100%',
        borderTopLeftRadius: 250,
        alignItems: 'center',
        backgroundColor: '#CAF0EA'
    },
    inputContainer: {
        marginTop: -70,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    input: {
        marginTop: 20,
        paddingLeft: 10,
        width: 200,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000",
        backgroundColor: '#fff'
    },
    buttonContainer: {
        marginTop: 20
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
    buttonText: {
        color: 'white'
    },
    buttonLogin: {
        backgroundColor: 'white',
    },
    forgotPassword: {
        justifyContent: "center",
        marginTop: 20,
    }
})