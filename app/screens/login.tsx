import { View, Image, Text, StyleSheet} from 'react-native'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
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
  }
})