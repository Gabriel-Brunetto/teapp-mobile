import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useRouter } from "expo-router";

export default function Screening() {

    const router = useRouter();
    
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.title}>Quociente de Espectro do Autismo (QA)</Text>
            <View style={{ paddingHorizontal: 20, alignSelf: 'center' }}>
                <Text style={styles.paragraph}>
                    Essa escala foi desenvolvida para a detecção de quadros sutis de autismo em adultos
                </Text>
                <Text style={styles.paragraph}>
                    Leva cerca de 5-10 minutos para ser concluído
                </Text>
            </View>
            <TouchableOpacity style={[styles.button]} onPress={() => router.push('/screens/dsm')}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.skipButton]}>
                <Text style={{color: '#000'}}>Skip Test</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginTop: -70,
        width: 350,
        height: 350
    },
    title: {
        marginTop: -50,
        fontSize: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#1E4D6B',
        paddingHorizontal: 40,
        textAlign: 'center'
    },
    paragraph:{
        marginTop: 40,
        fontSize: 15,
        textAlign: 'center'
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
    skipButton:{
        backgroundColor: '#fff',
    },
    buttonText:{
        color: '#fff',
    }
})