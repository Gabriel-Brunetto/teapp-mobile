import { useRouter } from 'expo-router'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function LoginScreen() {

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
            <View>
                <TouchableOpacity onPress={() => router.replace('/screens/register')}>
                    <Text>Voltar</Text>
                </TouchableOpacity>
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

})