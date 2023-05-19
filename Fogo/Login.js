import React from 'react';
import styles from './estilo';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: false,

        };


    }

    handleCheckBox() {
        this.setState({ rememberMe: !this.state.rememberMe });

    }

    handleLogin = () => {
         const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert('Deu certo');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }


    


    render() {
        return (
            <View style={styles.container}>

                <Image style={styles.Logo}
                    source={require("./assets/epic.png")}>
                </Image>

                <View>
                    <Text style={{marginRight:"25%",color:"white"}}>SING WITH AN EPIC GAMES ACCOUNT</Text>
                </View>

                <View>

                    <TextInput
                        style={[styles.input, styles.texto2]}
                        placeholder='Username or Email'
                        placeholderTextColor={'#717171'}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                    />

                </View>

                <View>
                    <TextInput
                        style={[styles.input, styles.texto2]}
                        placeholder='Password'
                        placeholderTextColor={'#717171'}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        secureTextEntry={true}
                    />
                </View>

                <View style={{ flexDirection: 'row', margin:10}}>
                    <CheckBox
                        checkedColor='white'
                        checked={this.state.rememberMe}
                        onPress={() => this.handleCheckBox()}
                    
                    />
                    
                   
                    <Text style={styles.label}>Remember me</Text>
                    
                    
                    <Text style={{ color: '#696969',marginLeft:1 }}>Forgot Your Password</Text>
                    
                </View>


                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>LOG IN NOW</Text>
                </TouchableOpacity>

                <View>
                    <Text style={{ color: "white", alignItems: "center", margin: 30 }}>Privacy Policy</Text>
                </View>


                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#696969", alignItems: "center" }} >Dont't have an Epic Games account?    </Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Cadastro")}>
                        <Text style={{  color: "white" }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#696969", alignItems: "center" }} >Back to </Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Tela Inicial')}>
                        <Text style={{  color: "white" }}>all sign up options</Text>
                    </TouchableOpacity>
                </View>




            </View>
        )
    }

}

// npm install react-native-elements