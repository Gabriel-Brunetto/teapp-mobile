import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import api from "../services/api";
import userHooks from "../hooks/useUsers";

export default function RegisterScreen() {
  const { setUser } = userHooks()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  async function handleRegister() {
    try {
      console.log('Enviando:', { name, email, password, confirmPassword })
      const response = await api.post('/users', { name, email, password, confirmPassword })
      console.log(response.data)
      setUser(prev => [...prev, response.data])
      setName(''),
      setEmail(''),
      setPassword(''),
      setConfirmPassword('')
    }
    catch (err: any) {
      console.error('Status:', err.response?.status)
      console.error('Data:', err.response?.data)
      console.error('Message:', err.message)
    }

  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Register</Text>
      </View>
      <View>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          placeholderTextColor='#000'
          onChangeText={setName}
          value={name}
        />
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
        <TextInput
          placeholder="Confirm Your Password"
          style={styles.input}
          placeholderTextColor='#000'
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonLogin]}>
          <Text style={[styles.buttonText, { color: '#000' }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 120,
    fontSize: 64,
    fontWeight: 'bold',
    color: '#1E4D6B'
  },
  logo: {
    marginTop: -70,
    width: 350,
    height: 350,
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
    borderColor: "#000"
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
  }
})