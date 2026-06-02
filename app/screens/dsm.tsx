import {View, StyleSheet, Text} from 'react-native'

export default function DSM(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Quociente de Espectro do Autismo (QA)</Text>
            </View>
            <View>
                <Text style={{marginTop: 20 }}>Perguntas: 10/10</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
        alignItems: 'center'
    },
    title:{
        marginTop: 50,
        fontSize: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: '#1E4D6B',
        paddingHorizontal: 40,
        textAlign: 'center'
    }
})