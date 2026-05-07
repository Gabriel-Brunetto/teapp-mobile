import { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import api from "./services/api";

export default function Index() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite Seu Email"
          style={styles.input}
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          placeholder="Digite Sua Senha"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
  },
  title:{
    marginTop: 80,
    fontSize: 64,
    fontWeight: 'bold',
    color: '#1E4D6B'
  },
  logo:{
    marginTop: -70,
    width: 350,
    height: 350,
  },
  inputContainer:{
    alignItems: 'center',
    width: 100, 
    height: 150,
    justifyContent: 'space-around'
  },
  input:{
    paddingLeft: 10,
    width: 200,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000"
  }
})