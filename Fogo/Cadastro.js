import React, { useState, useEffect } from 'react';
import styles from './estilo';
import { Text, View, Image, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { CheckBox } from 'react-native-elements';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Paises from './paises'
import db from './Firebase';
import {
    collection, doc, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc,
    deleteField, increment
} from 'firebase/firestore';

// npm i react-native-dropdown-picker
// npm install @emotion/styled
// npm install @react-native-picker/picker
// "@emotion/styled": "^11.10.8",
//     "@mui/icons-material": "^5.11.16",
//     "@react-native-picker/picker": "^2.4.10",
//     "@react-navigation/native": "^6.1.6",
//     "@react-navigation/stack": "^6.3.16",
//     "expo": "~48.0.11",
//     "expo-status-bar": "~1.4.4",
//     "firebase": "^9.20.0",
//     "react": "18.2.0",
//     "react-dropdown": "^1.11.0",
//     "react-native": "^0.71.7",
//     "react-native-dropdown-picker": "^5.4.6",
//     "react-native-elements": "^3.4.3",
//     "react-native-floating-label-input": "^1.4.2",
//     "react-native-reanimated": "^2.14.4"

export default class Cadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            sobrenome: '',
            nomeExibicao: '',
            email: '',
            password: '',
            show: false,
            setShow: false,
            open: false,
            setOpen: false,
            selectedLanguage: '',
            setSelectedLanguage: '',
            rememberMe: false,
            remember: false,
            inputError: false



        }

    }


    togglePassword() {
        this.setState({ setShowPassword: !this.state.show });
    }


    handleCheckBox() {
        this.setState({ rememberMe: !this.state.rememberMe });

    }

    handleCheckBox2() {
        this.setState({ remember: !this.state.remember });

    }

    // validateInputs = () => {
    //     const { nome, sobrenome, nomeExibicao, email, password } = this.state;
    //     let error = false;

    //     if (typeof nome !== 'string' || nome.trim() === '') {
    //         error = true;
    //     }
    //     if (typeof sobrenome !== 'string' || sobrenome.trim() === '') {
    //         error = true;    
    //     }
    //     if (typeof nomeExibicao !== 'string' || nomeExibicao.trim() === '') {
    //         error = true;
    //     }
    //     if (typeof email !== 'string' || email.trim() === '') {
    //         error = true;
    //     }
    //     // Defina o estado `error` com base no valor atual do `error` e do `errorFields`
    //     this.setState({ error, errorFields: { nome, sobrenome, nomeExibicao, email } });
    // };

    handleBlur = () => {
        const { password } = this.state;
        if (password.length < 7) {
          this.setState({ inputError: true });
        } else {
          this.setState({ inputError: false });
        }
      };


    async create() {
        await setDoc(doc(db,"Usuarios", this.state.email), {
            nome: this.state.nome,
            sobrenome: this.state.sobrenome,
            nomeExibicao: this.state.nomeExibicao,
            email: this.state.email,
        });
    }
    createUser() {
        const auth = getAuth();
        this.create();
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
                // usuário criado com sucesso
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === 'auth/email-already-in-use') {
                    alert('Email já está sendo utilizado!!');
                } else {
                    alert(errorMessage);
                }
            });
    }



render() {
    return (
        <View style={styles.container}>
            <ScrollView style={{ width: "100%" }} contentContainerStyle={{ alignItems: 'center' }} >
                <Image style={styles.Logo}
                    source={require("./assets/epic.png")}>
                </Image>

                <Text style={{ color: "white", fontWeight: "bold" }}>CREATE YOUR EPIC GAMES ACCOUNT</Text>

                <Text style={{ color: "#717171", margin: 20, textAlign: "center", marginLeft: 5 }}> Hi, we've found your Xbox live account.{'\n'}
                    Create an Epic Games account link to save your{'\n'}
                    information and progression</Text>

                <View style={styles.Float}>
                    <View style={{
                        borderWidth: 2,
                        borderColor: "#49658c",
                        borderRadius: 10,
                        color: "white",
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10

                    }}>


                        <Picker
                            selectedValue={this.state.selectedLanguage}
                            onValueChange={(itemValue) => {
                                this.setState({ selectedLanguage: itemValue })
                            }}
                            style={{ color: 'white' }}
                        >
                            <Text label="País" value="picker" />

                            {Paises.map((pais) => <Picker.Item label={pais.name} value={pais.code}
                                style={{ color: 'black' }} />)}
                        </Picker>
                    </View>
                </View>



                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.inputs }>
                        <FloatingLabelInput
                            label='Nome'
                            showCountdown={true}
                            onChangeText={(text) => this.setState({ nome: text })}
                            value={this.state.nome}
                            maxLength={20}
                            inputStyles={styles.inputStyle}
                        />
                    </View>
                    <View style={[styles.inputs, { marginLeft: -10 }]}>
                        <FloatingLabelInput
                            label={'Sobrenome'}
                            onChangeText={(sobrenome) => this.setState({ sobrenome })}
                            value={this.state.sobrenome}
                            inputStyles={styles.inputStyle}
                        />
                    </View>
                </View>


                <View style={styles.Float}>
                    <FloatingLabelInput
                        style={styles.input}
                        label={'Nome de exibição'}
                        onChangeText={(nomeExibicao) => this.setState({ nomeExibicao })}
                        value={this.state.nomeExibicao}
                        inputStyles={styles.inputStyle}
                    >
                    </FloatingLabelInput>
                </View>

                <View style={styles.Float}>
                    <FloatingLabelInput
                        label={'Endereço de E-mail'}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        inputStyles={styles.inputStyle}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="emailAddress"
                        onBlur={() => {
                            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                            if (!emailRegex.test(this.state.email)) {
                                alert("Por favor, insira um endereço de e-mail válido.");
                            }
                        }}
                    >
                    </FloatingLabelInput>
                </View>

                <View style={styles.Float}>
                    <FloatingLabelInput
                        label={'Senha'}
                        isPassword
                        togglePassword={this.state.show}
                        secureTextEntry={this.state.show ? false : true}
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                        inputStyles={styles.inputStyle}
                        labelStyles={{
                            color: 'black',
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}
                        rightComponent={
                            <TouchableOpacity onPress={() => Alert.alert('As senha devem ter 7 ou mais caracteres.')} >
                                <MaterialIcons name="info" size={24} color="white" />
                            </TouchableOpacity>
                        }
                        onBlur={this.handleBlur}
                        textInputStyles={[
                          styles.inputStyle,
                          this.state.inputError ? styles.inputError : null // adicione a classe inputError se o estado for verdadeiro
                        ]}
                    />
                </View>

                <View style={{ flexDirection: 'row-reverse' }}>
                    <Text style={{ color: "#717171", margin: 10 }}>Quero receber notícias, pesquisas e ofertas{'\n'}especias da Epic games.</Text>
                    <CheckBox
                        checkedColor='white'
                        checked={this.state.rememberMe}
                        onPress={() => this.handleCheckBox()}
                    />
                </View>

                <View style={{ flexDirection: 'row-reverse' }}>
                    <Text style={{ color: "#717171", margin: 10 }}>Eu li e concordo com os termos de serviço.  </Text>

                    <CheckBox
                        checkedColor='white'
                        checked={this.state.remember}
                        onPress={() => this.handleCheckBox2()}
                    />
                </View>

                <View style={styles.button2}>
                    <TouchableOpacity onPress={() => this.createUser()}>
                        <Text style={{ textAlign: 'center', color: "white", fontSize: 15, }}>Continuar</Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <Text style={{ color: "white", alignItems: "center", margin: 20 }}>Privacy Policy</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#696969", alignItems: "center" }} >Já tem uma conta Epic Games? </Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{ color: "white" }}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "#696969", alignItems: "center" }} > Voltar para </Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Tela Inicial")}>
                        <Text style={{ color: "white" }}>todas as opções de cadastro</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
}